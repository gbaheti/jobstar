import React from 'react';

import './styles.css';

import Filter from '../filter';
import JobsList from '../jobsList';

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

export default JobsListView;