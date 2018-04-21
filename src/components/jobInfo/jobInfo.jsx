import React from 'react';

import './styles.css';
import bpo from '../../assets/bpo.svg';

const JobInfo = (props) => {
  const { profile, salary } = props;

  return (
    <div className="job-info">
      <img className="job-info__icon" src={bpo} alt="job-icon" />
      <div className="job-info__title">
        <h3>{profile}</h3>
        <p>Company posted 1 day ago</p>
      </div>
      <div className="job-info__earning">
        <h4 className="bullet-cap">earning</h4>
        <p>
          <span className="job-earning">&#8377;{salary}</span>
          /month
        </p>
      </div>
    </div>
  );
}

export default JobInfo;