import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Header from '../header';
import Sidebar from '../sidebar';
import JobsListView from '../jobsListView';
import Applications from '../applications';
import EditProfile from '../editProfile';
import Profile from '../profile';
import PrivateRoute from '../privateRoute';

import './styles.css';

const Main = (props) => {
  const { authenticated, user, jobCount, jobLocation, applications, appliedCount, registerUser } = props;

  return (
    <div className="main">
      <Header jobCount={jobCount} jobLocation={jobLocation} appliedCount={appliedCount} user={user}/>
      <div className="main__content">
        <Sidebar />
        <Switch>
          <Route path="/jobs" render={() => <JobsListView registerUser={registerUser} />}/>
          <Route path="/applied" render={() => <Applications applications={applications} authenticated={authenticated} />} />
          <PrivateRoute exact authenticated={authenticated} path="/profile" component={Profile} />
          <PrivateRoute authenticated={authenticated} path="/profile/edit" component={EditProfile} />
          <Redirect to="/jobs" />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.isLoggedIn,
    user: state.user.profile ? state.user.profile.first_name : null,
    jobCount: state.jobs.count,
    jobLocation: state.jobs.location,
    applications: state.user.appliedJobs,
    appliedCount: state.user.appliedJobs ? state.user.appliedJobs.length : null
  }
}

export default withRouter(connect(mapStateToProps)(Main));