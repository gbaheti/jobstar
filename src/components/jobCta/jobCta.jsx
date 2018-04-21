import React from 'react';

import './styles.css';
import flame from '../../assets/flame.svg';
import checked from '../../assets/checked.svg';

import Button from '../button/button';

const JobCta = (props) => {
  const { applicants, onUserApply, appliedOn } = props;
  
  return (
    <div className="job-cta">
      {
        applicants &&       
          <div className="job-cta__stats">
            <img src={flame} alt="" />
            <p>{applicants} applicants last week</p>
          </div>
      }
      <div className="job-cta__stats">
        <img src={checked} alt="" />
        <p>Phone Verified</p>
      </div>
      {
        appliedOn ? 
          <p className="job-cta__date">Applied on {appliedOn}</p> :
          <Button className="job-cta__btn" text="apply now" type="primary" clickHandler={onUserApply}/>
      }
    </div>
  );
} 

export default JobCta;