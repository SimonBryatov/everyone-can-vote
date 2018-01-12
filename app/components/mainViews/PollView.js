import React from 'react';
import { withRouter } from 'react-router-dom'
import PollChart from '../blocks/PollChart';
import Dropdown from '../blocks/Dropdown';
import {observer, inject} from 'mobx-react';
import { toJS } from 'mobx';

// let poll = {
//     options : [
//         {pollName: "c", val: 4}, {pollName: "coke", val: 5}, {pollName: "cok", val: 1}, {pollName: "cke", val: 2}
//     ]
// }
 // <div className = "flex-item"><PollChart poll = {currentPoll} /></div>
 //<div className = "p-1">{currentPoll[props.ViewStore.activeOptionIndex].pollName}</div>
const PollView = withRouter(inject("ViewStore")(observer((props) => {
    let currentPoll = props.ViewStore.getProperty('currentPoll');
    return(
    <div className = "poll-view">
    <div className = "flex-item flex-item-poll-view-header"><div className = "poll-view-header">What's your favourite videogame?</div></div>
   <div className = "poll-view-sub-headers">
    <div className = "left-line">
       <div className = "p-1">I'll vote for ...</div>
       <div className = "flex-item"><Dropdown options = {currentPoll.options}/></div> 
       <div className = "flex-item poll-view-btns">
         <div className = "flex-item"><div className = "btn btn-submit">Submit</div></div>
        <div className = "flex-item"><div className = "btn btn-twitter">Share with Twitter</div></div>
       </div>
    </div>
    <div className = "right-line">
       <div className = "p-1">Community votes:</div>
       <div className = "option-name">{renderOptionName(props.ViewStore.activeOptionIndex.get(), currentPoll)}</div>
       <div className = "flex-item" id = "chart-container"><PollChart poll = {currentPoll} /></div>  
    </div>
    </div>
    </div>
)})))
 
 let renderOptionName = (id, poll) => {
       if (id >=0 && poll) {
       return poll.options[id].name
       }
       
 }
 
export default PollView;
