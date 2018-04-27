import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { dasherize } from 'underscore.string';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import JobBody from '../jobBody';
import validate from './validate';

import './styles.css';
import check from '../../assets/checked.svg';

class JobsList extends Component {
  state = {
    redirectUrl: null,
    redirectToDetailPage: false,
  }
  
  generateJobDetailUrl = (id, category, location) => {
    const hashText = id + category + location;
    const hash = btoa(hashText.slice(0, 8));

    return `job/${id}${dasherize(category)}${dasherize(location)}-${hash}`;
  }

  onOpenJobDetail = (data) => {
    const redirectUrl = this.generateJobDetailUrl(data.ids[0], data.category, data.location);

    this.setState({
      redirectUrl,
      redirectToDetailPage: true
    });
  } 

  render() {
    const { jobs, onUserApply, onUserRegister } = this.props;
    const filteredJobs = jobs.slice(1, 23);

    if(this.state.redirectToDetailPage) {
      return <Redirect push to={this.state.redirectUrl} />
    }
  
    return (
        <Accordion className="jobs-list">
          <TransitionGroup className="tr-jobs-list">
          {
            filteredJobs.map((j, idx) => {
              if(j.applied) {
                return (
                  <CSSTransition appear={true} timeout={300} classNames="tr-applied-item" key={idx*233}>
                    <div className="jobs-list__item--applied">
                      <h4>You have successfully applied for this job</h4>
                      <img className="img-responsive" src={check} alt="" />
                    </div>
                  </CSSTransition>
                );
              }
  
              const data = validate(j);
  
              return (
                <CSSTransition appear={true} timeout={300} classNames="tr-job-item" key={data.ids[0]*idx}>
                  {
                    <AccordionItem className="jobs-list__item card">
                      <AccordionItemTitle className="jobs-list__head">
                        <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType} onOpenJobDetail={(e) => this.onOpenJobDetail(data)}/>
                        <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                        <JobCta applicants={data.applicants} onUserApply={onUserApply} jobIds={data.ids}/>
                      </AccordionItemTitle>  
                      <AccordionItemBody className="jobs-list__body"> 
                        <JobBody ageLimit={data.ageLimit} minAge={data.minAge} maxAge={data.maxAge} languages={data.languages} identity={data.identity} benefits={data.benefits} skills={data.skills} description={data.description} onUserRegister={onUserRegister}/>  
                      </AccordionItemBody>
                    </AccordionItem>
                  }
                </CSSTransition>
              );
            })
          }
          </TransitionGroup>
        </Accordion>
    );
  }
}

export default JobsList;