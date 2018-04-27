import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';

import JobInfo from '../jobInfo';
import JobBullets from '../jobBullets';
import JobCta from '../jobCta';
import JobBody from '../jobBody';
import { fetchJobDetail, openRegistrationModal, applyForJob } from '../../actions';
import validate from '../jobsList/validate';

import './styles.css';

class JobDetail extends Component {
  componentDidMount() {
    const match = this.props.match;
    const detail = match.params.detail;
    const id = detail.split('-')[0];

    this.props.fetchJobDetail(id);
  }

  handleApply = (ids) => {
    if(!this.props.userLoggedIn) {
      this.props.registerUser();
    } else {
      this.props.applyForJob(ids);
    }
  }

  render() {
    const { job, applyForJob, registerUser } = this.props;
    
    let data = null;

    if(job) {
      data = validate(job);
    }

    return (
      <div className="job-detail-view">
        <TransitionGroup>
        {
          data && (
            <CSSTransition appear={true} timeout={300} classNames="tr-job-item">
              <Accordion>
                <AccordionItem className="jobs-list__item card" expanded={true}>
                  <AccordionItemTitle className="jobs-list__head">
                    <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType}/>
                    <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                    <JobCta applicants={data.applicants} onUserApply={this.handleApply} jobIds={data.ids}/>
                  </AccordionItemTitle>  
                  <AccordionItemBody className="jobs-list__body"> 
                    <JobBody ageLimit={data.ageLimit} minAge={data.minAge} maxAge={data.maxAge} languages={data.languages} identity={data.identity} benefits={data.benefits} skills={data.skills} description={data.description} onUserRegister={registerUser}/>  
                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
            </CSSTransition>
          ) 
        }
        </TransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    job: state.jobDetail.data,
    userLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    fetchJobDetail: (id) => dispatch(fetchJobDetail(id)),
    registerUser: () => dispatch(openRegistrationModal()),
    applyForJob: (ids) => dispatch(applyForJob(ids))
  }
};

export default connect(mapStateToProps, mapDispatchWithProps)(JobDetail);