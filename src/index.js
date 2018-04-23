import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from "./components/app/";
import Business from './components/business';
import configureStore from './store/configureStore';
import { restoreSession } from './actions';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(restoreSession());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/business' component={Business} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider> 
  , document.getElementById('root')
);

registerServiceWorker();