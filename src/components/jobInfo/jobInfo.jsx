import React from "react";

import "./styles.css";
import bpo from "../../assets/bpo.svg";
import driver from "../../assets/driver.png";
import sales from "../../assets/sales.png";
// import security from "../../assets/security.png";
// import writer from "../../assets/writer.png";
// import waiter from "../../assets/waiter.png";
// import teaching from "../../assets/teaching.png";
// import receptionist from "../../assets/receptionist.png";

const JobInfo = props => {
  let { type, profile, salary, paidBy, onOpenJobDetail } = props;
  let icon;

  // TODO - Add icon according to types
  switch (type) {
    case "brand_promoter":
      icon = sales;
      break;

    default:
      icon = bpo;
  }

  return (
    <div className="job-info">
      <div className="job-info__icon flex">
        <img className="img-responsive" src={icon} alt="job-icon" />
      </div>
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
