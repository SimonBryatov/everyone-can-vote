import React from 'react';
//import '../../assets/scss/Dropdown.scss'
import {observer, inject} from 'mobx-react';

//style = {{"background-color": colorMap[ind]}

const renderList = (options, store) => {
    let colorMap = store.getProperty("colorMap");
    if (colorMap == 0) return;
  const list = [];
  options.forEach((opt, ind) => {
   let rgb = hexToRgb(colorMap[ind]);
   let colorString = "rgba(" + rgb + ", 0.3)" 
   list.push(<div className = "dropdown-list-item" style = {{"background-color": colorString}}
   onMouseOver = {() => {store.activeOptionIndex.set(ind)}} >{opt.name}</div>)
  }
  )
  list.push(<input className = "dropdown-list-item new-option" placeholder = "Add new option"></input>)
  return(list)
} 

@inject("ViewStore") @observer class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
        console.log("online")
    }
    
    render() {
    
    let store = this.props.ViewStore;
    return(    
    <div className = "dropdown">
    {renderList(this.props.options, store)}
    </div>
    )
}
}

function hexToRgb(h) {
    let hex = h.replace(/[^0-9A-F]/gi, '');
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

export default Dropdown;
