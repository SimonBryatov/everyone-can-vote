import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/PollsList.scss'
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx'
import List from './List'



const PollsList = inject("ViewStore")(observer((props) => {
 
 var polls = toJS(props.ViewStore.pollsList);
 if (polls) {
     polls.reverse();
 return (
    <List list = {polls} btnClose = {false} listClass = {"polls-list"} clickHandler = {() => {props.ViewStore.choosePollMenuOpened.set(false)}}/>
)
} else return null
}));

export default PollsList;
