import React from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
//import '../../assets/scss/PollsList.scss'
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx'
//import List from '../blocks/List'


 @observer class AboutView extends React.Component {
   
    constructor(props) {
        super(props);
    }
 
    
    render() {
  //console.log();
  
  return(  
      <div className = "flex-item about-view">
      <div className = "flex-item about-view-t-1">Thanks for visiting this page!</div>
      <div className = "flex-item about-view-t-2">
      This app was created by Me with MERN stack (Mongo, Express, Node JS, React)
      </div>
      <div className = "flex-item about-view-t-3"><div>Specially thanks to <span className = "fcc-mention">FreeCodeCamp</span> team for this unbelievable experience</div></div>
      <div className = "flex-item about-view-t-4">Cats are great, especially kittens ;3</div>
      <div className = "flex-item about-view-t-5">Have a nice day or a great night</div>
      <div className = "flex-item about-view-t-6">And see you later with new JavaScript adventures</div>
      </div>
      )
  }
}


export default AboutView;