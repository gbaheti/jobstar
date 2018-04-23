import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import Button from '../button';
import validate from '../jobsList/validate';

import './styles.css';

class Applications extends Component {
  state = {
    selectedOption: '',
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { applications, authenticated } = this.props;
    const { selectedOption } = this.state;

    if(!authenticated) {
      return (
        <div className="applications">
          <h4>You must log in to view your applications!</h4>
        </div>
      );
    }

    if(!applications || !applications.length) {
      return (
        <div className="applications">
          <h4>You have not applied for any jobs 😲</h4>
        </div>
      )
    }
    
    return (
      <div className="applications">
        <ul className="applications__list">
        {
          applications.map((a, idx) => {
            const data = validate(a.job_details);

            return (
              <li key={idx}>
                <div className="applications__item card">
                  <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType} />
                  <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                  <JobCta appliedOn={'Unknown'} />
                  <p className="applications__status-text">What happened to this job?</p>
                  <div className="applications__status">
                    <Select
                      name="application-status"
                      value={selectedOption}
                      placeholder="I got the job"
                      onChange={this.handleChange}
                      options={[
                        { value: 'yay', label: 'Yes' },
                        { value: 'nay', label: 'No' },
                      ]}
                    />
                    <Button type="primary" text="submit" className="applications__status-submit"/>
                  </div>
                </div>
              </li>
            );
          })
        }
        </ul>
      </div>
    )
  }
}

export default Applications;