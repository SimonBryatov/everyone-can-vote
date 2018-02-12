import {observable, action, computed} from 'mobx';
import { toJS } from 'mobx';


class ViewStore {
    constructor() {
        console.log("store is ready, really ready, really")
    }
    @observable currentPoll = null;
    @observable pollsList = null;
    activeOptionIndex = observable(0);
    dataIsFetching = observable(true);
    isSideMenuOpened = observable(false);
    choosePollMenuOpened = observable(false);
    chosenOptionIndex = observable(null);
    isMobileVersion = observable(false);
    @observable colorMap = null;
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
   
   @action.bound setProperty(objName, data) {
           this[objName] = data;
           console.log(this.pollsList, 'hey')
   }
   
   sectorColor(ind) {
       let color = this.colorMap[ind]
       if (ind == this.activeOptionIndex) {
       }
       return color;
   }
   
    @action.bound setPollView(id) {
            this.chosenOptionIndex.set(null)
            this.currentPoll = this.pollsList.find((e) => {
                if (e['_id'] == id) {
                    return e
                    
                } else {
                return null
            } });
            
            if (this.currentPoll.options.length - 1 < this.activeOptionIndex) {
                this.activeOptionIndex.set(0);
            }
            if (this.currentPoll == null) return;
            console.log("Setting Poll View", this.currentPoll);
     let colorMap = [];
     let amount = 0;
    this.currentPoll.options.forEach((opt, ind) => {
        opt.seqKey = ind;
        colorMap.push(getRandomColor()); 
        amount+=opt.val})   
     this.colorMap = colorMap;

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