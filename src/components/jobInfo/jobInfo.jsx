import React from "react";

import "./styles.css";
import bpo from "../../assets/bpo.svg";

const JobInfo = props => {
  let { profile, salary, paidBy, onOpenJobDetail } = props;

  return (
    <div className="job-info">
      <img className="job-info__icon" src={bpo} alt="job-icon" />
      <div className="job-info__title">
        <h3 onClick={onOpenJobDetail}>{profile}</h3>
        <p>Posted 1 day ago</p>
      </div>
      {paidBy.length ? (
        <div className="job-info__earning">
          <h4 className="bullet-cap">earning</h4>
          <p>
            <span className="job-earning">&#8377;{salary}</span>
            /{paidBy}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default JobInfo;
