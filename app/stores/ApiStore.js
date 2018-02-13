import {observable, action} from 'mobx';
import React from 'react';
import { toJS } from 'mobx';
import axios from "axios";
//import appUrl from "../config/appUrl";
import {ViewStore} from "../config/Root"
import URLSearchParams from "url-search-params"
var cookies = require('js-cookie');

let appUrl = "https://everyone-can-vote.herokuapp.com"

class ApiStore {
    constructor() {
        this.fetchPollsList();
        this.prepareToken()
        if (this.userToken.get()) {
            console.log("logged in")
            this.isLoggedIn.set(true)
            this.userName.set(cookies.get("userName"))
        }
        console.log("Api store is ready")
    }
    @observable userPolls = null;
    currentPoll_Id = null;
    isLoggedIn = observable(false)
    fetching = observable(false)
    userToken = observable(null)
    userName = observable(null)
    voted = observable(false);
    lastVote = observable(null);
    newOption = observable("")
    pollName = observable("")
    pollOptions = observable("")
    
    
     @action.bound renderOnLoginStatus(guestOpt, userOpt) 
     {
       return this.isLoggedIn.get() ? userOpt : guestOpt;  
     }
    
    @action.bound logOut() {
        console.log("Logging out")
        this.userToken.set(null);
        this.userName.set(null);
        this.isLoggedIn.set(false);
        cookies.remove('userToken');
        cookies.remove('userName');
    }
    
    @action.bound getUserPolls() {
        this.fetching.set(true);
        axios
        .get(appUrl + `/api/userPolls`)
         .then(res => {
            {
             console.log(res.data)
             this.userPolls = res.data;
             this.fetching.set(false)
             }
              
         })
         .catch((err) => {console.log(err.response.data)})
    }
    
     @action.bound prepareToken() {
       var urlParams = new URLSearchParams(window.location.search);
       var token = urlParams.get("token");
       console.log(token, "curr params")
       if (token) {
           console.log("Got the token " + token)
           cookies.set('userToken', token, {secure: true, expires: 14});
           cookies.set('userName', urlParams.get("userName"))
       }
       
       token = cookies.get("userToken");
       console.log("checked the cookies", token)
       if (token) {
         this.userToken.set(token);  
         this.userName.set(cookies.get("userName"))
         console.log("curr token", this.userToken.get())
       }
       
   }
   
       @action.bound fetchPollsList = (lastVote) => {
           this.fetching.set(true)
      axios.get(appUrl + "/api/pollsList")
        .then(res => {
            console.log("I've got the power of Polls... Again!", res.data)
            ViewStore.setProperty("pollsList", res.data)
            this.fetching.set(false);
            if (lastVote >= 0) {
                this.lastVote.set(lastVote)
            }
            if (this.currentPoll_Id) {
                ViewStore.setPollView(this.currentPoll_Id);
            }
   })
   }
   
    
    @action.bound createNewPoll() {
        console.log("New Poll is " + this.pollName + " " + this.pollOptions + "!")
        var opts = this.pollOptions.get().split(`\n`);
        let newPoll =  {name: this.pollName.get(), options: opts};
        console.log(JSON.stringify(newPoll));
        axios
        .post(appUrl + `/api/createNewPoll?data=${JSON.stringify(newPoll)}`, {firstName: 123})
         .then(res => {
            {
             console.log(res.data)
             this.pollName.set("");
             this.pollOptions.set("");
             this.fetchPollsList();
             }
              
         })
         .catch((err) => {alert(err.response.data)})
    }
    
      reset() {
          console.log("reset")
         this.newOption.set("");
         this.pollName.set("");
         this.pollOptions.set("");
         this.userPolls = null;
         ViewStore.chosenOptionIndex.set(null);
     }
     
     @action.bound deletePoll(id) {
         console.log("Deleting poll " + id)
         let pollsList = ViewStore.getProperty("pollsList");
         let poll = pollsList.find((poll) => {if (poll["_id"] == id) return true})
         if (confirm('Do you really want to delete poll "'+ poll.name +'"?' + `\nThis action is permanent.`)) {
         axios
        .get(appUrl + `/api/deletePoll`, {params: {pollId: id}})
         .then(res => {
             console.log(res.data, this)
             this.fetchPollsList();
             this.getUserPolls();
            })
         }
     }
     
     @action.bound vote() {
         if (this.newOption.get() == "") {
             console.log(ViewStore.chosenOptionIndex.get(), "wow")
             
         console.log("Last voted for ", this.lastVote.get())
         let vote_id = ViewStore.currentPoll.options[ViewStore.chosenOptionIndex]["_id"];
         console.log(vote_id, "voting");
          console.log("Voting for" + this.pollName + " " + this.pollOptions + "!")
          axios.get(appUrl + `/api/vote`, {params: {optId: vote_id, pollId: ViewStore.currentPoll["_id"]}})
         .then(res => {
         console.log("Last voted for ", this.lastVote.get())
         this.fetchPollsList(ViewStore.chosenOptionIndex.get());
                       console.log(res.data, 5555534)
         }).catch((err) => {alert(err.response.data)})
         } else axios.get(appUrl + `/api/vote`, {params: {optName: this.newOption.get(), pollId: ViewStore.currentPoll["_id"]}})
         .then(res => {
               this.fetchPollsList(ViewStore.chosenOptionIndex.get());
         }).catch((err) => {alert(err.response.data)})
     }
    
} 

export default ApiStore;