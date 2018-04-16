import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import WhatsappJobAlert from './whatsappJobAlert/whatsappJobAlert';

import './sidebar.css';
import postBg from '../../assets/postBg.png';
import chevronRight from '../../assets/chevron-right.svg';

/*********************************************************************
 Sub-components
*********************************************************************/

function ListTab(props) {
  return (
    <li className="tab">
      <NavLink className="tab__link" to={props.href} activeClassName="tab__link--active">
        {props.text}
      </NavLink>
    </li>
  );
}

function PromotionalPost(props) {
  return (
    <div className="post card">
      <img className="post__media img-responsive" src={props.media} alt="post-bg"/>
      <div className="post__content">
        <p>{props.text}</p>
        <img src={chevronRight} alt=""/>
      </div>
    </div>
  );
}

/*********************************************************************
 Main component
*********************************************************************/

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar__nav card">
          <ListTab text="Search Jobs" href="/jobs" />
          <ListTab text="Your Applications" href="/applied" />
        </ul>
        <WhatsappJobAlert />
        <PromotionalPost media={postBg} text="Here’s how Aman made an extra ₹5000 while studying."/>
      </div>
    );
  }
}

export default Sidebar;