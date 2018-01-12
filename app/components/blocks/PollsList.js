import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/PollsList.scss'
import {observer, inject} from 'mobx-react';


const renderList = (ViewStore) => {
  const list = [];
  for (let i = 0; i < 20; i++) {
   list.push(<Link to = {'/poll:' + i} className = "polls-list-item" onClick = {() => ViewStore.choosePollMenuOpened.set(false)}>Favourite Movie</Link>,
   <Link to = {'/poll:' + i} className = "polls-list-item" onClick = {() => ViewStore.choosePollMenuOpened.set(false)}>Cola vs Pepsi</Link>,
   <Link to = {'/poll:' + i} className = "polls-list-item" onClick = {() => ViewStore.choosePollMenuOpened.set(false)}>McDonalds vs Fastfood</Link>
    )
  }
  return(list)
} 

const PollsList = inject("ViewStore")(observer((props) => (
    <div className = "polls-list">
    {renderList(props.ViewStore)}
    </div>
)));

export default PollsList;
