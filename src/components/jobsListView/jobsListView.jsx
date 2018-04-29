import React, { Component } from "react";
import { connect } from "react-redux";

import Filter from "../filter";
import JobsList from "../jobsList";
import { fetchJobs, openRegistrationModal, applyForJob } from "../../actions";

class JobsListView extends Component {
  componentDidMount() {
    this.props.fetchJobs(this.props.userLoggedIn);
  }

  handleApply = ids => {
    if (!this.props.userLoggedIn) {
      this.props.registerUser();
    } else {
      this.props.applyForJob(ids);
    }
  };

  render() {
    const { jobs, registerUser } = this.props;

    return (
      <div className="jobs">
        <Filter />
        <JobsList
          jobs={jobs}
          onUserApply={this.handleApply}
          onUserRegister={registerUser}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs.data,
    userLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchWithProps = dispatch => {
  return {
    fetchJobs: isLoggedIn => dispatch(fetchJobs(isLoggedIn)),
    registerUser: () => dispatch(openRegistrationModal()),
    applyForJob: ids => dispatch(applyForJob(ids)),
  };
};

export default connect(mapStateToProps, mapDispatchWithProps)(JobsListView);
