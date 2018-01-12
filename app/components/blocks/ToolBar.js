import React from 'react';
import { Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
//  import fbLogo from 'svg-url-loader?noquotes!.../assets/icons/facebook-logo.svg'
import './ToolBar.scss';

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

const ToolBar = inject("ViewStore")(observer((props) => {
    let navBtn = props.ViewStore.isSideMenuOpened.get() || props.ViewStore.choosePollMenuOpened.get() ? "nav-menu-btn nav-menu-btn-moved" : "nav-menu-btn";
   return(
    <div className = "toolbar">
    <div className = {navBtn} onClick = {() => {onMainBtnClick(props.ViewStore)}}> </div>
    <Link to = "/"><div className = "logo" onClick = {() => {closeSideMenu(props.ViewStore)}}>EVERYONE-CAN-VOTE</div></Link>
    <VisibleTabs ViewStore = {props.ViewStore} />
    </div>
    )
}))

const VisibleTabs = (props) => {
 
 let navClass = props.ViewStore.isSideMenuOpened.get() ? "nav visible" : "nav" 
 
 return( props.loggedIn ? 
  <div className = "nav">
 <Link to = "/" onClick = {() => {closeSideMenu(props.ViewStore)}}><div className = "hoverable">Home</div></Link>
  <Link to = "/addpoll" onClick = {() => {closeSideMenu(props.ViewStore)}}><div className = "hoverable">New Poll</div></Link>
  <div className = "nav inline" onClick = {() => {closeSideMenu(props.ViewStore)}}>Sign in</div>
  
  </div> :
  <div className = {navClass}>
  <Link to = "/" onClick = {() => {closeSideMenu(props.ViewStore)}}><div className = "hoverable nav-item">Home</div></Link>
  <Link to = "/addpoll" onClick = {() => {closeSideMenu(props.ViewStore)}}><div className = "hoverable nav-item">New Poll</div></Link>
  <div className = "inline nav-item" onClick = {() => {closeSideMenu(props.ViewStore)}}>
  <div className className = "hoverable">Sign in</div>
  <div className = "icon-container"><div className = "fb-icon hoverable"></div></div>
  </div>
    <div className = "hoverable nav-item">About</div>
  </div>
  )
}


export default ToolBar;
