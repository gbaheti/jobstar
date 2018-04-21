import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from "./components/app/";
import { fetchJobs } from './actions'; 
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(fetchJobs());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider> 
  , document.getElementById('root')
);

registerServiceWorker();