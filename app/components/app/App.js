import React from "react"//'../../vendors/vendors';
import { Switch, Route, withRouter} from 'react-router-dom';
import HomeView from '../mainViews/HomeView'
import PollView from '../mainViews/PollView'
import PollAddView from '../mainViews/PollAddView'
import UserPollsView from '../mainViews/UserPollsView'
import AboutView from '../mainViews/AboutView'
import PollsList from '../blocks/PollsList'
import ToolBar from '../blocks/ToolBar'
import {observer, inject} from 'mobx-react'


const App = withRouter(inject("ViewStore", "ApiStore")(observer((props) => { 
  let sideMenu = props.ViewStore.isSideMenuOpened.get() ? "side-menu side-menu-opened" : "side-menu";
  let pollsListBtn = props.ViewStore.choosePollMenuOpened.get() ? "poll-list-btn poll-list-btn-active" : "poll-list-btn";
  if (window.location.pathname == "/") {
    pollsListBtn += " poll-list-btn-animated"
  }
  let choosePollMenu = props.ViewStore.choosePollMenuOpened.get() ? "polls-list-container polls-list-container-visible" : "polls-list-container";
  if (props.ViewStore.getProperty("pollsList")) {
  return (
    <div className = "app">
    <div className = {sideMenu}>
    </div>
    <ToolBar isLoggedIn = {props.ApiStore.isLoggedIn.get()}/>
    <div className = {!props.ViewStore.choosePollMenuOpened.get() ? "main-content my-scroll" : "main-content"}>
   
    <div className = {choosePollMenu}>
    <div className = "polls-list-header">Available Polls:</div>
    <PollsList />
   
    </div>
    
    <div className = {pollsListBtn} onClick = {() => {props.ViewStore.choosePollMenuOpened.set(!props.ViewStore.choosePollMenuOpened.get())}}>
   <div className = "btn-image">
   </div>
   <div>
   </div>
    </div>
    <div className = "flex-item views-container">
    {props.ApiStore.fetching.get() ? 
     <div className = "loader-container"><div className = "loader"></div></div> 
   : null
}
    <Switch>
    <Route exact path="/" component = {HomeView} />
    <Route exact path="/poll/:id" component={PollView} />
    <Route exact path = "/addpoll" component = {PollAddView} />
    <Route exact path = "/myPolls" component = {UserPollsView} />
     <Route exact path = "/about" component = {AboutView} />
    </Switch>
    </div>
    </div>
    </div>
  );}
  else return null;
})));


export default App;

