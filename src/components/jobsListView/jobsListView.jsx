import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../filter';
import JobsList from '../jobsList';
import { openRegistrationModal } from '../../actions';
import { fetchJobs } from '../../actions'; 

import './styles.css';

class JobsListView extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  handleApply = () => {
    if(!this.props.userLoggedIn) {
      this.props.registerUser();
    }
  }

  render() {
    const { jobs, registerUser } = this.props;

    return (
      <div className="jobs">
        <Filter />
        <JobsList jobs={jobs} onUserApply={this.handleApply} onUserRegister={registerUser}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.profile.isLoggedIn
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    fetchJobs: () => dispatch(fetchJobs()),
    registerUser: () => dispatch(openRegistrationModal())
  }
};

export default connect(mapStateToProps, mapDispatchWithProps)(JobsListView);