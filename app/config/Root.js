import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/app/App';
import { Provider } from 'mobx-react';
import store from '../stores/ViewStore';
import { toJS } from 'mobx';

const ViewStore = new store(); 
window.onresize = () => {
  setDeviceScreenType();
 // ViewStore.updater.set(!ViewStore.updater)
}

let setDeviceScreenType = () => {
  let screenSize = document.documentElement.clientWidth;
  console.log("width", screenSize)
  screenSize > 768 ? ViewStore.isMobileVersion.set(false) : ViewStore.isMobileVersion.set(true)
}

setDeviceScreenType();
//console.log(ViewStore.getJSON('currentPoll'))

const Root = () => {
  return (
    <Provider ViewStore = {ViewStore}>
    <Router>
      <App />
    </Router>
    </Provider>
  );
};

export default Root;
