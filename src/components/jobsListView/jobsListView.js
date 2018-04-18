import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

import Filter from './filter/filter';
import Button from '../button/button';

import './jobsListView.css';
import bpo from '../../assets/bpo.svg';
import flame from '../../assets/flame.svg';
import checked from '../../assets/checked.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';

/*********************************************************************
 Sub-components
*********************************************************************/

function JobBody(props) {
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

function JobCta(props) {
  const { applicants } = props;
  
  return (
    <div className="job-cta">
      <div className="job-cta__stats">
        <img src={flame} alt="" />
        <p>{applicants} applicants last week</p>
      </div>
      <div className="job-cta__stats">
        <img src={checked} alt="" />
        <p>Phone Verified</p>
      </div>
      <Button className="job-cta__btn" text="apply now" type="primary" />
    </div>
  );
} 

function JobBullets(props) {
  let { employer, shift, area, type } = props;
  
  employer = employer.length > 16 ? (employer.slice(0, 13) + '...') : employer

  return (
    <ul className="job-bullets">
      <li className="job-bullets__item">
        <h4 className="bullet-cap">who's hiring</h4>
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
}

function JobInfo(props) {
  const { profile, salary } = props;
  const bgColors = ['bgc--red', 'bgc--cyan', 'bgc--yellow'];
  const bgColorClass = bgColors[Math.floor(Math.random()*bgColors.length)];

  return (
    <div className="job-info">
      <img className={"job-info__icon " + bgColorClass} src={bpo} alt="job-icon" />
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

function JobsList(props) {
  return (
    <Accordion className="jobs-list">
      {
        props.jobs.map((job, idx) => {
          return (
            <AccordionItem className="jobs-list__item card" key={idx}>
                <AccordionItemTitle className="jobs-list__head">
                  <JobInfo profile={job.profile} salary={job.salary} />
                  <JobBullets employer={job.employer} shift={job.shift} area={job.area} type={job.type} />
                  <JobCta applicants={job.applicants} />
                </AccordionItemTitle>
                <AccordionItemBody className="jobs-list__body">
                  <JobBody min_age={job.requirements.min_age} max_age={job.requirements.max_age} languages={job.requirements.languages} benefits={job.requirements.benefits} skills={job.requirements.skills} description={job.description}/>
                </AccordionItemBody>
            </AccordionItem>
          );
        })
      }
    </Accordion>
  );
}

/*********************************************************************
 Main component
*********************************************************************/

class JobsListView extends Component {
  state = {
    data: null
  }

  fetchJobs = () => {
    return import('./fakeData');
  }

  componentDidMount() {
    this.fetchJobs()
      .then(data => {
        this.setState({ data: data.default });
      }); 
  }

  render() {
    return (
      <div>
        <Filter />
        {
          this.state.data ?
            <JobsList jobs={this.state.data.jobs}/> : null
        }
      </div>
    );
  }
}

export default JobsListView;