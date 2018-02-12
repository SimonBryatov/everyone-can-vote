import React from 'react';
import { Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

const List = (observer((props) => (
    <div className = {"my-scroll " + props.listClass}>
    {renderList(props.list, props.clickHandler, props.listItemClass, props.btnClose)}
    </div>
)));

const renderList = (list, clickHandler, listItemClass, btnClose) => {
    let ls = []
  if (list) {
  list.forEach((poll, ind) => {
      if (btnClose) {
          ls.push(<div className = {"user-li-item-cont"}><Link to = {'/poll/' + poll['_id']} className = {"user-li-item"} 
  >{poll.name}</Link><button className = "delete-btn" onClick = {() => {clickHandler(poll["_id"]); console.log(213)}}><i className = "fas fa-times"/></button></div>) }
     else
      {
   ls.push(<Link to = {'/poll/' + poll['_id']} className = {"polls-list-item " + listItemClass} 
   onClick = {clickHandler}>{poll.name}</Link>)
  }
      
  })
  return(ls)
  } 
} 

export default List
