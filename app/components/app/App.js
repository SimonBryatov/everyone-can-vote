import React from "react"//'../../vendors/vendors';
import { Switch, Route, withRouter} from 'react-router-dom';
import HomeView from '../mainViews/HomeView'
import PollView from '../mainViews/PollView'
import PollAddView from '../mainViews/PollAddView'
import PollsList from '../blocks/PollsList'
import ToolBar from '../blocks/ToolBar'
import {observer, inject} from 'mobx-react'
import { Nav, NavItem } from 'react-bootstrap'

//console.log(window.location.pathname);

 //<div className = "btn-image">fdsfdsdf</div>
const App = withRouter(inject("ViewStore")(observer((props) => { 
  let sideMenu = props.ViewStore.isSideMenuOpened.get() ? "side-menu side-menu-opened" : "side-menu";
  let pollsListBtn = props.ViewStore.choosePollMenuOpened.get() ? "poll-list-btn poll-list-btn-active" : "poll-list-btn";
  if (window.location.pathname == "/") {
    pollsListBtn += " poll-list-btn-animated"
  }
  let choosePollMenu = props.ViewStore.choosePollMenuOpened.get() ? "polls-list-container polls-list-container-visible" : "polls-list-container";
  
  return (
    <div className = "app">
    <div className = {sideMenu}>
    </div>
    <ToolBar />
    <div className = "main-content">
    <div className = {choosePollMenu}>
    <PollsList />
   
    </div>
    <div className = {pollsListBtn} onClick = {() => {props.ViewStore.choosePollMenuOpened.set(!props.ViewStore.choosePollMenuOpened.get())}}>
   <div className = "btn-image">
   </div>
   <div>
   </div>
    </div>
    <Switch>
    <Route exact path="/" component = {HomeView} />
    <Route exact path="/poll:id" component = {PollView} />
    <Route exact path = "/addpoll" component = {PollAddView} />
    </Switch>
    </div>
    </div>
  );
})));

export default App;

// <div className = "scroll-me">Scroll down to see more polls...</div>