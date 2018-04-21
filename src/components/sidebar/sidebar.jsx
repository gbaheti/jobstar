import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './styles.css';
import postBg from '../../assets/postBg.png';

import LinkTabs from '../linkTabs';
import WhatsappJobAlert from '../whatsappJobAlert';
import PromotionalPost from '../promotionalPost';

const Sidebar = (props) => {
  const { isLoggedIn, appliedCount } = props;

  const defaultTabs = [{
    text: 'All Jobs',
    href: '/jobs'
  }, {
    text: 'Your Applications',
    href: '/applied',
    count: appliedCount
  }];

  const profileTabs = [{
    emoji: '✍️',
    text: 'Edit profile',
    href: '/profile/edit'
  }, {
    emoji: '👀',
    text: 'View profile',
    href: '/profile'
  }];

  return (
    <div className="sidebar">
      <LinkTabs tabs={defaultTabs} />
      { isLoggedIn && <LinkTabs tabs={profileTabs} /> }
      <WhatsappJobAlert />
      <PromotionalPost media={postBg} text="Here’s how Aman made an extra ₹5000 while studying."/>
      <ul className="sidebar__footer">
        <li className="sidebar__link">
          <Link to="/">Post a job</Link>
        </li>
        <li className="sidebar__link">
          <Link to="/">Send feedback</Link>
        </li>
        <li className="sidebar__link">
          <Link to="/">हिंदी में देखें </Link>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.profile.isLoggedIn,
  appliedCount: state.profile.profileData ? state.profile.profileData.appliedCount : null
});

export default withRouter(connect(mapStateToProps)(Sidebar));