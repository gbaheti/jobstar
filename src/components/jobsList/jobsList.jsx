import React from 'react';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import JobBody from '../jobBody';
import validate from './validate';

import './styles.css';

const JobsList = (props) => {
  const { jobs, onUserApply, onUserRegister } = props;
  const filteredJobs = jobs.slice(11, 16);

  return (
      <Accordion className="jobs-list">
        <TransitionGroup className="sama">
        {
          filteredJobs.map((j, idx) => {
            const data = validate(j);

            return (
              <CSSTransition appear={true} enter={true} timeout={500} classNames="tr-job-item" key={idx}>
                <AccordionItem className="jobs-list__item card" key={idx}>
                  <AccordionItemTitle className="jobs-list__head">
                    <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType}/>
                    <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                    <JobCta applicants={data.applicants} onUserApply={onUserApply} jobIds={data.ids}/>
                  </AccordionItemTitle>  
                  <AccordionItemBody className="jobs-list__body"> 
                    <JobBody ageLimit={data.ageLimit} minAge={data.minAge} maxAge={data.maxAge} languages={data.languages} identity={data.identity} benefits={data.benefits} skills={data.skills} description={data.description} onUserRegister={onUserRegister}/>  
                  </AccordionItemBody>
                </AccordionItem>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
      </Accordion>
  );
}

export default JobsList;