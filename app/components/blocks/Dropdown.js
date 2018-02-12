import React from 'react';
import {observer, inject} from 'mobx-react';


const renderList = (options, Vstore, Astore) => {
   let colorMap = Vstore.getProperty("colorMap");
    if (!colorMap) return;
  const list = [];
  options.forEach((opt, ind) => {
   let rgb = hexToRgb(colorMap[ind]);
   let colorString = "rgba(" + rgb + ", 0.3)" 
   list.push(<div className = "options-list-item" style = {{"background-color": colorString}}
   onMouseOver = {() => {Vstore.activeOptionIndex.set(ind)}} onClick = {() => {Vstore.chosenOptionIndex.set(ind); Astore.newOption.set("")}} >{opt.name}</div>)
  }
  )
  return(list)
} 

@inject("ViewStore", "ApiStore") @observer class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }
    
    render() {
    
    let Vstore = this.props.ViewStore;
    let Astore = this.props.ApiStore;
    console.log("Options", this.props.options);
    return(    
    <div className = "options-list">
    <div className = "options-list-cont my-scroll">
    {renderList(this.props.options, Vstore, Astore)}
    </div>
    <input className = "options-list-item new-option" placeholder = "Add new option" onChange = {(e) => {Astore.newOption.set(e.target.value)}}
    value = {Astore.newOption.get()}></input>
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
