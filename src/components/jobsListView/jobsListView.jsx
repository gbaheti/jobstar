import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Filter from '../filter';
import JobsList from '../jobsList';
import { openRegistrationModal } from '../../actions';

const JobsListView = (props) => {
  const { jobs, registerUser } = props;

  return (
    <div className="jobs">
      <Filter />
      {
        jobs.length > 0 ?
          <JobsList jobs={jobs} onUserApply={registerUser}/> : null
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: () => dispatch(openRegistrationModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsListView);