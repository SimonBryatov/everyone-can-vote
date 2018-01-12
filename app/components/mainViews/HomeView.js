import React from 'react';
import { Link } from 'react-router-dom';
import {observer, inject} from 'mobx-react';
//import '../../assets/scss/HomeView.scss'

const HomeView = inject("ViewStore")(observer((props) => (
    <div className = "home-view">
    <div className = "l-1">Ready to <span className = "red-word">Vote</span>?</div>
    <div className = "l-2">
    <div className = "l-2-el arrow-left">{'<'}==========</div>
    <div className = "l-2-el">Choose your topic{'\n'}<span className = "red-word">~(˘▾˘~)</span></div>
    <div className = "l-2-el arrow-left">{'<'}==========</div>
    </div>
    <div className = "l-3">Or create a <br/>
    <Link className = "red-word btn-new" to = "/addpoll" >New One!</Link>
    </div>
    </div>
)));

export default HomeView;
