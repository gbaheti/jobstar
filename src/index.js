import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/app/";
import configureStore from './store/configureStore';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

// store.dispatch(fetchJobs());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider> 
  , document.getElementById('root')
);

registerServiceWorker();