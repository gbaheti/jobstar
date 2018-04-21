import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Filter from '../filter';
import JobsList from '../jobsList';
import { openRegistrationModal } from '../../actions';
import { fetchJobs } from '../../actions'; 


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
        {
          jobs.length > 0 ?
            <JobsList jobs={jobs} onUserApply={this.handleApply} onUserRegister={registerUser}/> : null
        }
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