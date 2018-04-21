import React from 'react';
import { replaceAll, titleize, humanize, capitalize, truncate } from 'underscore.string';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

import './styles.css';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import JobBody from '../jobBody';

const validate = (job) => {
  const template = job.job_template;
  const details = template.other_details;

  if(!details.Role || !details.Income || !template.company || !details.Timings || !details.location || !details.Channel || !details['Age Limit'] || !details['Languages known'] || !details['Job Benefits'] || !details.Skills || !Array.isArray(details.Skills))
    return null;

  const data = {
    category: details.Role,
    salary: details.Income.salary,
    salaryType: details.Income.type,
    employer: template.company.name,
    timings: details.Timings,
    location: details.location,
    channel: details.Channel,
    applicants: Math.floor(Math.random()*10),
    ageLimit: !(details['Age Limit'] === 'Not required'),
    minAge: 16,
    maxAge: 60,
    identity: details['Identity Proof'],
    languages: details['Languages known'],
    benefits: details['Job Benefits'],
    skills: details.Skills,
    description: template.description
  }
  
  data.category = titleize(humanize(data.category));
  data.salaryType = replaceAll(data.salaryType, "per_", "", true).toLowerCase();
  data.timings = capitalize(data.timings);
  data.location = truncate(titleize(data.location), 14);
  data.channel = truncate(data.channel, 14);

  return data;
};

const JobsList = (props) => {
  const { jobs, onUserApply, onUserRegister } = props;

  return (
    <Accordion className="jobs-list">
      {
        jobs.map((j, idx) => {
          const data = validate(j);
          
          if(!data) return null;

          return (
            <AccordionItem className="jobs-list__item card" key={idx}>
              <AccordionItemTitle className="jobs-list__head">
                <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType}/>
                <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                <JobCta applicants={data.applicants} onUserApply={onUserApply} />
              </AccordionItemTitle>
              <AccordionItemBody className="jobs-list__body">
                <JobBody ageLimit={data.ageLimit} minAge={data.minAge} maxAge={data.maxAge} languages={data.languages} identity={data.identity} benefits={data.benefits} skills={data.skills} description={data.description} onUserRegister={onUserRegister}/>
              </AccordionItemBody>
            </AccordionItem>
          )
        })
      }
    </Accordion>
  );
}

export default JobsList;