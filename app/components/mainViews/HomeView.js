import React from 'react';
import { Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react';

@inject("ViewStore") @observer class HomeView extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
    <div className = "home-view">
    <div className = "flex-item l-1">Ready to <span className = "red-word">Vote</span>?</div>
    <div className = "flex-item l-2">
    <div className = "l-2-el arrow-left"><div>{'<'}======</div></div>
    <div className = "l-2-el l-2-center-txt">Choose your topic</div>
    <div className = "l-2-el arrow-left"><div>{'<'}======</div></div>
    </div>
    <div className = "l-3 flex-item"><div>Or create a</div>
    <Link className = "red-word btn-new" to = "/addpoll" >New One!</Link>
    
    </div></div>
    )
    }

}


export default HomeView;
