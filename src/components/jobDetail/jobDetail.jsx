import React, { Component } from "react";
import { connect } from "react-redux";
import ContentLoader from "react-content-loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from "react-accessible-accordion";

import JobInfo from "../jobInfo";
import JobBullets from "../jobBullets";
import JobCta from "../jobCta";
import JobBody from "../jobBody";

import { normalizeJob } from "../../helpers";
import { fetchJobDetail, openRegistrationModal, applyForJob, resetJobDetail } from "../../actions";

import "./styles.css";
import "react-accessible-accordion/dist/minimal-example.css";

class JobDetail extends Component {
  componentDidMount() {
    const match = this.props.match;
    const detail = match.params.detail;
    const id = detail.split("-")[0];

    this.props.fetchJobDetail(id);
  }

  componentWillUnmount() {
    this.props.resetJobDetail();
  }

  handleApply = ids => {
    if (!this.props.userLoggedIn) {
      this.props.registerUser();
    } else {
      this.props.applyForJob([ids]);
    }
  };

  renderJobDetailLoader = () => {
    return (
      <div className="job-detail-loader">
        <ContentLoader height={300} width={400} speed={2} primaryColor="#ecebeb" secondaryColor="#f4f4f4">
          <circle cx="25" cy="25" r="20" />
          <rect x="55" y="15" rx="4" ry="4" width="60" height="5" />
          <rect x="55" y="30" rx="4" ry="4" width="80" height="5" />
          <rect x="0" y="65" rx="4" ry="4" width="350" height="6" />
          <rect x="0" y="85" rx="4" ry="4" width="380" height="6" />
          <rect x="0" y="105" rx="4" ry="4" width="200" height="6" />
          <rect x="0" y="130" rx="4" ry="4" width="70" height="5" />
          <rect x="90" y="130" rx="4" ry="4" width="60" height="5" />
          <rect x="290" y="117.5" rx="6" ry="6" width="80" height="25" />
          <rect x="0" y="150" rx="6" ry="6" width="380" height="2" />
          <rect x="0" y="170" rx="4" ry="4" width="60" height="5" />
          <rect x="100" y="170" rx="4" ry="4" width="50" height="6" />
          <rect x="0" y="190" rx="4" ry="4" width="50" height="5" />
          <rect x="100" y="190" rx="4" ry="4" width="100" height="6" />
          <rect x="0" y="210" rx="4" ry="4" width="75" height="5" />
          <rect x="100" y="210" rx="4" ry="4" width="90" height="6" />
          <rect x="0" y="230" rx="4" ry="4" width="60" height="5" />
          <rect x="100" y="230" rx="4" ry="4" width="120" height="6" />
          <rect x="0" y="250" rx="4" ry="4" width="50" height="5" />
          <rect x="100" y="250" rx="4" ry="4" width="100" height="6" />
        </ContentLoader>
      </div>
    );
  };

  render() {
    const { job, registerUser } = this.props;

    if (!job) {
      return this.renderJobDetailLoader();
    } else {
      const data = normalizeJob(job);

      if (data) console.log(data);

      return (
        <div className="job-detail-view">
          <TransitionGroup>
            {data && (
              <CSSTransition appear={true} timeout={300} classNames="tr-job-item">
                <Accordion>
                  <AccordionItem className="jobs-list__item card" expanded={true}>
                    <AccordionItemTitle className="jobs-list__head">
                      <JobInfo profile={data.category} salary={data.salary} paidBy={data.salaryType} />
                      <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                      <JobCta applicants={data.applicants} onUserApply={this.handleApply} jobIds={data.ids} />
                    </AccordionItemTitle>
                    <AccordionItemBody className="jobs-list__body">
                      <JobBody
                        ageLimit={data.ageLimit}
                        minAge={data.minAge}
                        maxAge={data.maxAge}
                        languages={data.languages}
                        identity={data.identity}
                        benefits={data.benefits}
                        skills={data.skills}
                        description={data.description}
                        onUserRegister={registerUser}
                      />
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    job: state.jobDetail.data,
    userLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchWithProps = dispatch => {
  return {
    resetJobDetail: () => dispatch(resetJobDetail()),
    fetchJobDetail: id => dispatch(fetchJobDetail(id)),
    registerUser: () => dispatch(openRegistrationModal()),
    applyForJob: ids => dispatch(applyForJob(ids)),
  };
};

export default connect(mapStateToProps, mapDispatchWithProps)(JobDetail);
