import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from "react-accessible-accordion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContentLoader from "react-content-loader";

import JobInfo from "../jobInfo";
import JobBullets from "../jobBullets";
import JobCta from "../jobCta";
import JobBody from "../jobBody";

import { generateShareableJobUrl, normalizeJob } from "../../helpers";

import "./styles.css";
import "react-accessible-accordion/dist/minimal-example.css";
import check from "../../assets/checked.svg";

class JobsList extends Component {
  state = {
    redirectUrl: null,
    redirectToDetailPage: false,
  };

  onOpenJobDetail = data => {
    const redirectUrl = generateShareableJobUrl(data.ids[0], data.category, data.location);

    this.setState({
      redirectUrl,
      redirectToDetailPage: true,
    });
  };

  renderJobsLoader = () => {
    return (
      <div className="jobs-loader">
        <ContentLoader height={160} width={400} speed={1.2} primaryColor="#ecebeb" secondaryColor="#f9f9f9">
          <circle cx="25" cy="25" r="20" />
          <rect x="55" y="15" rx="4" ry="4" width="60" height="5" />
          <rect x="55" y="30" rx="4" ry="4" width="80" height="5" />
          <rect x="0" y="65" rx="4" ry="4" width="350" height="6" />
          <rect x="0" y="85" rx="4" ry="4" width="380" height="6" />
          <rect x="0" y="105" rx="4" ry="4" width="200" height="6" />
          <rect x="0" y="130" rx="4" ry="4" width="70" height="5" />
          <rect x="90" y="130" rx="4" ry="4" width="60" height="5" />
          <rect x="290" y="117.5" rx="6" ry="6" width="80" height="25" />
        </ContentLoader>
      </div>
    );
  };

  renderAppliedNotofication = idx => {
    return (
      <CSSTransition appear={true} timeout={300} classNames="tr-applied-item" key={idx * 233}>
        <div className="jobs-list__item--applied">
          <h4>You have successfully applied for this job</h4>
          <img className="img-responsive" src={check} alt="" />
        </div>
      </CSSTransition>
    );
  };

  render() {
    const { jobs, onUserApply, onUserRegister } = this.props;

    if (this.state.redirectToDetailPage) {
      return <Redirect push to={this.state.redirectUrl} />;
    }

    if (Array.isArray(jobs) && !jobs.length) {
      return this.renderJobsLoader();
    }

    return (
      <Accordion className="jobs-list">
        <TransitionGroup className="tr-jobs-list">
          {jobs.map((j, idx) => {
            if (j.applied) {
              return this.renderAppliedNotofication(idx);
            } else {
              const data = normalizeJob(j);

              return (
                data && (
                  <CSSTransition appear={true} timeout={300} classNames="tr-job-item" key={data.ids[0] * idx}>
                    <AccordionItem className="jobs-list__item card">
                      <AccordionItemTitle className="jobs-list__head">
                        <JobInfo
                          profile={data.category}
                          salary={data.salary}
                          paidBy={data.salaryType}
                          onOpenJobDetail={e => this.onOpenJobDetail(data)}
                        />
                        <JobBullets employer={data.employer} shift={data.timings} area={data.location} type={data.channel} />
                        <JobCta applicants={data.applicants} onUserApply={onUserApply} jobIds={data.ids} />
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
                          onUserRegister={onUserRegister}
                        />
                      </AccordionItemBody>
                    </AccordionItem>
                  </CSSTransition>
                )
              );
            }
          })}
        </TransitionGroup>
      </Accordion>
    );
  }
}

export default JobsList;
