import React, { Component } from 'react';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

import Filter from './filter/filter';

import './jobsListView.css';

function JobHead(props) {
  const { job } = props;
  
  return (
    <div className="job-head">
      <div className="job-info">
        <img className="job-info__icon" alt="job-icon" />
        <div className="job-info__title">
          <h3>{job.profile}</h3>
          <p>Company posted 1 day ago</p>
        </div>
        <div className="job-info__earning">
          <h3>earning</h3>
          <p>
            <span className="job-earning">{job.salary}</span>
            /month
          </p>
        </div>
      </div>
      <div className="job-bullets">
        
      </div>
    </div>
  );
}

function JobsList(props) {
  return (
    <Accordion className="jobs-list">
      {
        props.jobs.map(job => {
          return (
            <AccordionItem className="jobs-list__item card">
                <AccordionItemTitle className="jobs-list__head">
                  <JobHead job={job}/>
                </AccordionItemTitle>
                <AccordionItemBody className="jobs-list__body">
                    <p>Body content</p>
                </AccordionItemBody>
            </AccordionItem>
          );
        })
      }
    </Accordion>
  );
}

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