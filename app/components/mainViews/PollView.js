import React from 'react';
import { withRouter } from 'react-router-dom'
import PollChart from '../blocks/PollChart';
import Dropdown from '../blocks/Dropdown';
import {observer, inject} from 'mobx-react';


 

@withRouter @inject("ViewStore", "ApiStore") @observer class PollView extends React.Component{
    
    constructor(props) {
    super(props);
    }
    
    componentWillMount() {
    this.props.ApiStore.reset();
    this.props.ApiStore.currentPoll_Id = this.props.match.params.id;
    this.props.ApiStore.lastVote.set(null)
    this.props.ApiStore.fetchPollsList();
    //this.props.ViewStore.setPollView(this.props.match.params.id);
    }
    
    componentWillUnmount() {
         this.props.ApiStore.currentPoll_Id = null;
    }
    
   
    
    componentDidUpdate(prevProps) {
     this.props.ApiStore.currentPoll_Id = this.props.match.params.id;
      console.log("I did update");
      if (this.props.location != prevProps.location) {
       console.log("raised");
       this.props.ApiStore.lastVote.set(null);
      this.props.ApiStore.fetchPollsList();
    
    }
    }
    
    
    render() {
 
    let storedCurrentPoll = this.props.ViewStore.getProperty('currentPoll');
    let choice = this.props.ViewStore.chosenOptionIndex.get();
    let newOption = this.props.ApiStore.newOption.get();
    let userOption = () => {
       if (newOption != "") {
        return newOption
       } else return (
       (choice == 0 || choice) ? storedCurrentPoll.options[choice].name : "Choose an option from the list below:"
        )
       }
    if (storedCurrentPoll) {
    return(
    <div className = "poll-view">
    <div className = "flex-item flex-item-poll-view-header"><div className = "poll-view-header"></div>{storedCurrentPoll.name}</div>
   <div className = "poll-view-sub-headers">
    <div className = "left-line">
       <div className = "p-1">I'll vote for ...</div>
       <div className = "flex-item user-option">{userOption()}</div>
       <div className = "flex-item options-container"><Dropdown options = {storedCurrentPoll.options}/></div> 
       {(this.props.ApiStore.lastVote.get() != null) ? <div className = "last-vote"><span className = "last-vote-span">Last Voted for</span>{' "' + storedCurrentPoll.options[this.props.ApiStore.lastVote.get()].name + '"'}</div> : null}
      {buttonRender(this.props.ApiStore.vote, this.props.ApiStore.lastVote.get())}
    </div>
       {chartRender(storedCurrentPoll, this.props.ViewStore)}
   
    </div>
   
    </div>
)}
     else return null
    }
  
}


let buttonRender = (vote, cond) => {
   if (cond || cond == 0) {
    return (<div className = "flex-item poll-view-btns"> <div className = "flex-item btn btn-submit" onClick = {() => {vote()}}>Submit</div>
        <a className = "flex-item btn btn-social" href="https://www.facebook.com/sharer/sharer.php?" target="_blank">
  Share on 
 <i className="fab fa-facebook icon-fb"></i></a> </div>)
   } else
   
   return(<div className = "flex-item poll-view-btns"> <div className = "flex-item btn btn-submit" onClick = {() => {vote()}}>Submit</div></div>)
}

 let chartRender = (poll, store) => {
   var totalVotes = poll.options.reduce((sum, opt) => {
     return sum + opt.votes;
   }, 0);
   if (totalVotes > 0) {
    return <div className = "right-line">
       <div className = "p-1">Community votes:</div> 
    <div className = "option-name">{renderOptionName(store.activeOptionIndex.get(), poll)} </div>   
    <div className = "flex-item" id = "chart-container"> 
    <PollChart poll = {poll}/>
    </div>  
    </div>
   } else return  <div className = "right-line">
       <div className = "p-1">Community votes:</div> 
   <div class = "chart-dummy">{`Congratulations!\nYou're first to Vote!`}</div>
   </div>
 }
 
 let renderOptionName = (id, poll) => {
       if (id >=0 && poll) {
       return poll.options[id].name
       }
       
 }
 
export default PollView;
