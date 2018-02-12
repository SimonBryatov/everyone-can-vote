import React from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/PollsList.scss'
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx'
import List from '../blocks/List'


@inject("ViewStore", "ApiStore") @observer class UserPollsView extends React.Component {
   
    constructor(props) {
        super(props);
    }
 
    componentWillMount() {
        this.props.ApiStore.getUserPolls()
    }
    
    componentWillUnmount() {
        this.props.ApiStore.reset();
    }
    render() {
 
  let userPolls = toJS(this.props.ApiStore.userPolls)
  if (userPolls) {
  let list = userPolls.reverse()
  return(  
      <div className = "user-polls-view">
      <div className = "flex-item flex-item-header"><div>My Polls</div></div>
      <List className = "flex-item userPollsList" clickHandler = {this.props.ApiStore.deletePoll} list = {list} btnClose = {true} listItemClass = "user-polls-list-item" listClass = {"userPollsList"}/></div>
      )
  } else return null
}
}

export default UserPollsView;
