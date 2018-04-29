import React from "react";

import "./styles.css";

const JobBullets = props => {
  let { employer, shift, area, type } = props;

  employer = employer.length > 16 ? employer.slice(0, 13) + "..." : employer;

  return (
    <ul className="job-bullets">
      <li className="job-bullets__item">
        <h4 className="bullet-cap">company</h4>
        <p>{employer}</p>
      </li>
      <li className="job-bullets__item">
        <h4 className="bullet-cap">timings</h4>
        <p>{shift}</p>
      </li>
      <li className="job-bullets__item">
        <h4 className="bullet-cap">where</h4>
        <p>{area}</p>
      </li>
      <li className="job-bullets__item">
        <h4 className="bullet-cap">work from</h4>
        <p>{type}</p>
      </li>
    </ul>
  );
};

export default JobBullets;
