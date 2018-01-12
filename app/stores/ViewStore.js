import {observable, action, computed, box} from 'mobx';
import { toJS } from 'mobx';

class ViewStore {
    constructor() {
        console.log("store is ready")
    }
    @observable currentPoll = {
    options : [
        {name: "Metal Gear Solid 5", val: 4}, {name: "Grand Theft Auto V", val: 5}, {name: "Need For Speed: Most Wanted (2005)", val: 1}, {name: "Life is Strange", val: 2}
    ]
};
    activeOptionIndex = observable(0);
    updater = observable(true);
    isSideMenuOpened = observable(false);
    choosePollMenuOpened = observable(false);
    chosenOptionIndex = observable(-1);
    isMobileVersion = observable(false);
    @observable colorMap = 0;
    @computed get optionsPercentageMap() {
        let map = []
        let totalAmount = this.currentPoll.options.length;
        this.currentPoll.options.forEach((opt) => {
            map.push[((opt.val/totalAmount)*100).toFixed(2) + "%"]
        })
        return map;
    }
    
    renderForMobile(isMobile, component) {
        if (isMobile == this.isMobileVersion) {
            return component;
        }
    }
   
   getProperty(objectName) {
       return(toJS(this[objectName]))
   }
   
   sectorColor(ind) {
       let color = this.colorMap[ind]
       if (ind == this.activeOptionIndex) {
        //  color = LightenDarkenColor(color, 150);
       }
       return color;
   }
   
    @action.bound setPollView() {
     let colorMap = [];
     let amount = 0;
    this.currentPoll.options.forEach((opt, ind) => {
        opt.seqKey = ind;
        colorMap.push(getRandomColor()); 
        amount+=opt.val})   
     this.colorMap = colorMap;
     console.log("woooooa", toJS(this.colorMap))
    }
    
    @action.bound setOptionIndex(ind) {
        this.activeOptionIndex = ind;
        console.log(ind)
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default ViewStore