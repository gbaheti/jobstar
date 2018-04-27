import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../navbar';
import Main from '../main';
import RegisterFlow from '../registerFlow';
import Footer from '../footer';
import JobDetail from '../jobDetail';

import './styles.css';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/job/:detail' component={JobDetail} />
        <Route path='/' component={Main} />
      </Switch>
      <RegisterFlow />
      <Footer />
    </div>
  );
}

export default App;