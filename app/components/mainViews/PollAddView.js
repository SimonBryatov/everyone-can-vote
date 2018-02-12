import React from 'react';
import {observer, inject} from 'mobx-react';


@inject("ApiStore") @observer class PollAddView extends React.Component {
    
     constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        this.props.ApiStore.reset();
    }
        render() {
    var content = this.props.ApiStore.renderOnLoginStatus(
    
       <div className = "poll-add-view">
    <div className = "flex-item flex-item-header"><p>New Poll</p></div>
     <div className = "flex-item msg-l-1">Log in first!</div>
     <div className = "flex-item msg-l-2"><div>And we'll ask them questions together</div><div className = "ascii-smile">༼ つ ◕_◕ ༽つ</div></div>
     <div className = "flex-item msg-l-3"><a className = "poll-add-login  hoverable" href = "/auth/facebook">
  Log In<i className="fab fa-facebook icon-fb"></i>
  </a></div>
        </div>
    
    
    ,
     <div className = "poll-add-view">
    <div className = "flex-item flex-item-header"><p>New Poll</p></div>
     <div className = "flex-item flex-item-name-field"><input className = "name-field" placeholder = "Enter poll name" value = {this.props.ApiStore.pollName.get()} onChange = {(e) => {this.props.ApiStore.pollName.set(e.target.value)}}></input></div>
    <div className = "flex-item flex-item-options-field"><textarea className = "options-field" placeholder = {'Enter Options\nSeparated\nBy\nNew Lines'}
    value = {this.props.ApiStore.pollOptions.get()} onChange = {(e) => {this.props.ApiStore.pollOptions.set(e.target.value)}}></textarea></div>

    {((this.props.ApiStore.pollName.get() != "") && (this.props.ApiStore.pollOptions.get() != "")) ? 
    <div className = "flex-item flex-item-btn-create"><button id = "btn-create-poll" className = "btn-create" onClick = {() => {this.props.ApiStore.createNewPoll()}}>Create a Poll</button>
     </div>
        :
        <div className = "flex-item flex-item-btn-create complete-fields">Complete fields to proceed   <span className = "red-word">ʕ♥ᴥ♥ʔ</span></div>
    }
        </div>)
    return content;
    
   } 
   
}



export default PollAddView;
