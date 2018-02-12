import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/app/App';
import { Provider } from 'mobx-react';
import Vstore from '../stores/ViewStore';
import Astore from '../stores/ApiStore';
import { toJS } from 'mobx';

const ViewStore = new Vstore(); 
window.onresize = () => {
  setDeviceScreenType();
}
export {ViewStore};

const ApiStore = new Astore();

let setDeviceScreenType = () => {
  let screenSize = document.documentElement.clientWidth;
  console.log("width", screenSize)
  screenSize > 768 ? ViewStore.isMobileVersion.set(false) : ViewStore.isMobileVersion.set(true)
}

setDeviceScreenType();

const Root = () => {
  return (
    <Provider ViewStore = {ViewStore} ApiStore = {ApiStore}>
    <Router>
      <App />
    </Router>
    </Provider>
  );
};

export default Root;

