import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import postBg from '../../assets/postBg.png';

import LinkTabs from '../linkTabs';
import WhatsappJobAlert from '../whatsappJobAlert';
import PromotionalPost from '../promotionalPost';

const Sidebar = () => {
  const defaultTabs = [{
    text: 'All Jobs',
    href: '/jobs'
  }, {
    text: 'Your Applications',
    href: '/applied'
  }];

  return (
    <div className="sidebar">
      <LinkTabs tabs={defaultTabs} />
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

export default Sidebar;