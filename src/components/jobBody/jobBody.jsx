import React from 'react';

import './styles.css';
import whatsapp from '../../assets/icon-whatsapp.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';

import Button from '../button/button';

const JobBody = (props) => {
  const { min_age, max_age, languages, benefits, skills, description } = props;

  return (
    <div className="job-body">
      <ul className="job-body__requirements">
        <li className="job-body__item">
          <h4 className="bullet-cap">age limit</h4>
          <p>{min_age} to {max_age}</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">languages known</h4>
          <p>{languages.join(', ')}</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">identity required</h4>
          <p>Not required</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">job benefits</h4>
          <p>{benefits.join(', ')}</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">skills needed</h4>
          <p>{skills.join(', ')}</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">job description</h4>
          <p>{description}</p>
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">employer contact</h4>
          <Button className="job-body__btn" text="login to view" type="secondary" />
        </li>
        <li className="job-body__item">
          <h4 className="bullet-cap">share this job</h4>
          <ul className="social-links">
            <li className="social-links__item">
              <img src={whatsapp} alt="whatsapp-logo" />
            </li>
            <li className="social-links__item">
              <img src={facebook} alt="fb-logo" />
            </li>
            <li className="social-links__item">
              <img src={linkedin} alt="linkedin-logo" />
            </li>
            <li className="social-links__item">
              <img src={twitter} alt="twitter-logo" />
            </li>
          </ul>
        </li>
      </ul>
      <div className="job-body__footer">
        <p>Don't forget to mention you found this job from <span className="footer-link">Jobstar.in</span> when you contact the job providers.</p>
      </div>
    </div>
  );
}

export default JobBody;