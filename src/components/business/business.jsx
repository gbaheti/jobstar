import React from 'react';

import Button from '../button';

import './styles.css';
import arrowRight from '../../assets/arrow-right.svg';
import logo from '../../assets/logo-yellow.svg';
import check from '../../assets/icon_check_green.svg';
import jobTasks from '../../assets/jobs-tasks.svg';
import currency from '../../assets/currency.svg';

const Business = () => {
  return (
    <div className="business">
      <nav className="business-nav flex limit-width">
        <div className="business-nav__brand flex">
          <img src={logo} alt='jobstar-logo' />
          <p>
            <span>🇮🇳</span>
            made in india
          </p>
        </div>
        <a className='business-link' href='#'>Read Blog</a>
      </nav>
      <div className="business-home limit-width">
        <div className="business-home__content">
          <h1>Easiest way to find verified <span className="text--highlighted text--bold">part-time workers.</span></h1>
          <p>We enable thousands of Indians to make money via part-time work online or offline.</p>
          <div className="business-cta">
            <Button className="business-cta__btn" type="primary" text="post a free job" icon={arrowRight} />
            <p className="business-cta__note">limited time only</p>
          </div>
          <a className='business-link' href='#'>Learn More</a>
        </div>
        <div className="business-home__shape">
          <img src={jobTasks} alt='' />
        </div>
      </div>
      <div className="business-about">
        <div className="business-about__description limit-width">
          <h2>What is Jobstar?</h2>
          <p>Jobstar is a crowdsourced hiring service with <span className="text--bold">thousands of verified workers</span>. We help individuals and businesses to create low cost <span className="text--bold">online + offline</span> part-time jobs to <span className="text--bold">increase sales, generate word of mouth, get better online ranking, do ground research, data creation, audit for quality assurance</span> and more. We are combining workers and employers to minimise publicity and marketing costs while at the same time providing money to everyday users.</p>
        </div>
        <div className="business-about__advantages limit-width">
          <div className="business-about__content">
            <h2>Why us?</h2>
            <ul className="advantages-list">
              <li className="advantages-list__item">
                <img src={check} alt="" />
                <p><span className="text--bold">No subscription fees or upfront costs</span> — only pay for the temp hires.</p>
              </li>
              <li className="advantages-list__item">
                <img src={check} alt="" />
                <p><span className="text--bold">Get instant results</span> once your incentivized task goes live to our workforce.</p>
              </li>
              <li className="advantages-list__item">
                <img src={check} alt="" />
                <p><span className="text--bold">Execute your job anywhere PAN India</span> — without worrying about creating a new team there.</p>
              </li>
            </ul>
          </div>
          <div className="business-about__shape">
            <img src={currency} alt='' />
          </div>
        </div>
      </div>
      <div className="business-jobs limit-width">
        <h2>Start hiring immediately</h2>
        <div className="business-jobs__onsite">
          <div className="business-jobs__heading">
            <h3>on-premise jobs</h3>
            <hr />
          </div>
          <ul className="business-jobs__list flex business-jobs__list--expanded">
            <li className="business-jobs__category">
              <img src="http://via.placeholder.com/280x130" alt="sales-jobs" />
              <h4>Sales / Marketing Job</h4>
              <p>Boost your customer outreach.</p>
              <Button type="primary" text="start hiring" />
            </li>
            <li className="business-jobs__category">
              <img src="http://via.placeholder.com/280x130" alt="sales-jobs" />
              <h4>Driver / Delivery Jobs</h4>
              <p>Get things delivered when business spikes.</p>
              <Button type="primary" text="start hiring" />
            </li>
            <li className="business-jobs__category">
              <img src="http://via.placeholder.com/280x130" alt="sales-jobs" />
              <h4>Hospitality Jobs</h4>
              <p>Easily fill shifts for your extra time.</p>
              <Button type="primary" text="start hiring" />
            </li>
          </ul>
        </div>
        <div className="business-jobs__remote">
          <div className="business-jobs__heading">
            <h3>remote / work from home jobs</h3>
            <hr />
          </div>
          <ul className="business-jobs__list flex">
            <li className="business-jobs__category">
              <img src="http://via.placeholder.com/280x130" alt="sales-jobs" />
              <h4>Mystery / Non-mystery Audits</h4>
              <p>Make sure you’re delivery the best quality.</p>
              <Button type="primary" text="start hiring" />
            </li>
            <li className="business-jobs__category">
              <img src="http://via.placeholder.com/280x130" alt="sales-jobs" />
              <h4>Online Marketing</h4>
              <p>Boost your digital presence by our workers.</p>
              <Button type="primary" text="start hiring" />
            </li>
          </ul>
        </div>
      </div>
      <div className="business-stats">
        <ul className="business-stats__list">
          <li className="business-stats__item">
            <span>👫</span>
            <p>7560</p>
            <h4>Verified Workers</h4>
          </li>
          <li className="business-stats__item">
            <span>🏡</span>
            <p>12</p>
            <h4>Cities in India</h4>
          </li>
          <li className="business-stats__item">
            <span>⚡️</span>
            <p>10,000+</p>
            <h4>Jobs/Tasks Done</h4>
          </li>
        </ul>
        <h3>What our clients say...</h3>
        <div className="business-stats__reviews">
          <div className="review-card">
            <p>Jobstar has been a great resource to help us meet spikes in our demand during Maha Bachat sales — a previously unavailable solution that has allowed us a lot of flexibility in managing the headcount in our stores.</p>
            <h4>future group</h4>
          </div>
          <div className="review-card">
            <p>“Jobstar has helped us find the best users to figure out what our customers need and we’re now building products around that.”</p>
            <h4>spars studio</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;