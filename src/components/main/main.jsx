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
  const { authenticated, jobs, jobCount, jobLocation, applications, appliedCount, registerUser, user } = props;

  return (
    <div className="main">
      <Header jobCount={jobCount} jobLocation={jobLocation} appliedCount={appliedCount} user={user}/>
      <div className="main__content">
        <Sidebar />
        <Switch>
          <Route path="/jobs" render={() => <JobsListView jobs={jobs} registerUser={registerUser} />}/>
          <Route path="/applied" render={() => <Applications applications={applications} />} />
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
    authenticated: state.profile.isLoggedIn,
    user: state.profile.profileData ? state.profile.profileData.name : null,
    jobs: state.jobs.data,
    jobCount: state.jobs.count,
    jobLocation: state.jobs.location,
    applications: state.profile.profileData ? state.profile.profileData.data : null,
    appliedCount: state.profile.profileData ? state.profile.profileData.appliedCount : null
  }
}

export default withRouter(connect(mapStateToProps)(Main));