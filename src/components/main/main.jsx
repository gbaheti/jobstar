import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import './styles.css';

import Header from '../header';
import Sidebar from '../sidebar';
import JobsListView from '../jobsListView';
import Applications from '../applications';

const Main = (props) => {
  const { jobCount, jobLocation } = props;

  return (
    <div className="main">
      <Header jobCount={jobCount} jobLocation={jobLocation} />
      <div className="main__content">
        <Sidebar />
        <Switch>
          <Route path="/jobs" component={JobsListView}/>
          <Route path="/applied" component={Applications} />
          <Redirect to="/jobs" />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    jobCount: state.jobs.count,
    jobLocation: state.jobs.location
  }
}


// Object.keys(obj).length === 0 && obj.constructor === Object
export default withRouter(connect(mapStateToProps)(Main));