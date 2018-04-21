import React from 'react';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

import './styles.css';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import JobBody from '../jobBody';

const JobsList = (props) => {
  const { jobs, onUserApply } = props;

  return (
    <Accordion className="jobs-list">
      {
        jobs.map((j, idx) => (
            <AccordionItem className="jobs-list__item card" key={idx}>
              <AccordionItemTitle className="jobs-list__head">
                <JobInfo profile={j.title} salary={j.salary} />
                <JobBullets employer={j.employer} shift={j.shift} area={j.area} type={j.type} />
                <JobCta applicants={j.applicants} onUserApply={onUserApply} />
              </AccordionItemTitle>
              <AccordionItemBody className="jobs-list__body">
                <JobBody min_age={j.requirements.min_age} max_age={j.requirements.max_age} languages={j.requirements.languages} benefits={j.requirements.benefits} skills={j.requirements.skills} description={j.description}/>
              </AccordionItemBody>
            </AccordionItem>
          )
        )
      }
    </Accordion>
  );
}

export default JobsList;