import React from 'react';
import { Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
var cookies = require('browser-cookies');

let closeSideMenu = (ViewStore) => {
  ViewStore.isSideMenuOpened.set(false);
  ViewStore.choosePollMenuOpened.set(false);
}

let onMainBtnClick = (ViewStore) => {
  if (ViewStore.choosePollMenuOpened.get()) {
    ViewStore.choosePollMenuOpened.set(false);
  }   else {
   ViewStore.isSideMenuOpened.set(!ViewStore.isSideMenuOpened.get())
  }
}
const ToolBar = inject("ViewStore", "ApiStore")(observer((props) => {
    let navBtn = props.ViewStore.isSideMenuOpened.get() || props.ViewStore.choosePollMenuOpened.get() ? "nav-menu-btn nav-menu-btn-moved" : "nav-menu-btn";
   return(
    <div className = "toolbar">
    <div className = {navBtn} onClick = {() => {onMainBtnClick(props.ViewStore)}}> </div>
     <div className = "flex-item flex-item-logo"><Link to = "/"><div className = "logo" onClick = {() => {closeSideMenu(props.ViewStore)}}>EVERYONE-CAN-VOTE</div></Link></div>
     
     
    {visibleTabs(props.ViewStore, props.isLoggedIn, props.ApiStore, props.ApiStore.userName.get())}
    
    </div>
    )
}))
// 

const visibleTabs = (ViewStore, isLoggedIn, ApiStore, userName) => {
 if (!isLoggedIn) {
 }
 let navClass = ViewStore.isSideMenuOpened.get() ? "nav nav-visible" : "nav" 
 navClass += " nav-links";
 let content = isLoggedIn ? 
  <div className = {navClass}>
  <div className = "userName nav-item">{"Hello, "} <span className = "userName-name">{userName}</span></div>
   <Link className = "hoverable nav-item" to = "/" onClick = {() => {closeSideMenu(ViewStore)}}>Home</Link>
   <Link className = "hoverable nav-item" to = "/addpoll" onClick = {() => {closeSideMenu(ViewStore)}}>New Poll</Link>
   <Link className = "hoverable nav-item" to = "/myPolls" onClick = {() => {closeSideMenu(ViewStore)}}>My Polls</Link>
  <div className = "hoverable nav-item"> <div onClick = {() => {closeSideMenu(ViewStore)}}>
  <div onClick = {() => {ApiStore.logOut()}}>
  Log Out
  </div>
  </div></div>
   <Link to = "/about" className = "hoverable nav-item" onClick = {() => {closeSideMenu(ViewStore)}}>About</Link>
  </div>
  
  :
  
  <div className = {navClass}>
  <Link className = "hoverable nav-item" to = "/" onClick = {() => {closeSideMenu(ViewStore)}}>Home</Link>
  <Link className = "hoverable nav-item" to = "/addpoll" onClick = {() => {closeSideMenu(ViewStore)}}>New Poll</Link>
  <div className = "inline nav-item" onClick = {() => {closeSideMenu(ViewStore)}}>
  <a className = "hoverable nav-item login-btn"href = "/auth/facebook">
  Log In
  <div className = "icon-container"><div className = "fb-icon"></div></div>
  </a>
  </div>
    <Link to = "/about" className = "hoverable nav-item" onClick = {() => {closeSideMenu(ViewStore)}}>About</Link>
  </div>
  
 
 
 return(content) 
 
  
  
  
  
  
}


export default ToolBar;
