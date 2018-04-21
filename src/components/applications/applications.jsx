import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './styles.css';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import Button from '../button';

class Applications extends Component {
  state = {
    selectedOption: '',
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    const { applications } = this.props;
    const { selectedOption } = this.state;

    if(!applications) {
      return (
        <div className="applications">
          <h4>You must log in to view your applications!</h4>
        </div>
      );
    }
    
    return (
      <div className="applications">
        <ul className="applications__list">
        {
          applications.map((a, idx) => (
            <li key={idx}>
              <div className="applications__item card">
                <JobInfo profile={a.title} salary={a.salary} />
                <JobBullets employer={a.employer} shift={a.shift} area={a.area} type={a.type} />
                <JobCta appliedOn={a.applied_date} />
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
          ))
        }
        </ul>
      </div>
    )
  }
}

export default Applications;