import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar';
import JobsListView from '../jobsListView/jobsListView';

import './main.css';

/*********************************************************************
 Sub-components
*********************************************************************/

function Head(props) {
  return (
    <div className="main__head">
      <h2>Part-time Jobs in {props.jobLocation}</h2>
      <p>Showing {props.jobCount} part time jobs in {props.jobLocation}</p>
    </div>
  );
}

/*********************************************************************
 Main component
*********************************************************************/

class Main extends Component {
  state = {
    count: 22,
    location: 'Delhi'
  }

  render() {
    return (
      <div className="main"> 
        <Head jobCount={this.state.count} jobLocation={this.state.location} />
        <div className="main__content">
          <Sidebar />
          <Switch>
            <Route path="/jobs" component={JobsListView} />
            <Route path="/applied" />
            <Redirect to="/jobs" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;