import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import LinkTabs from "../linkTabs";
import WhatsappJobAlert from "../whatsappJobAlert";
import PromotionalPost from "../promotionalPost";

import { toggleSidebar } from "../../actions";

import "./styles.css";
import postBg from "../../assets/postBg.png";

class Sidebar extends Component {
  hideSidebar = e => {
    this.props.toggleSidebar();
  };

  render() {
    const { isLoggedIn, appliedCount, isVisible } = this.props;

    const defaultTabs = [
      {
        text: "All Jobs",
        href: "/jobs",
      },
      {
        text: "Your Applications",
        href: "/applied",
        count: appliedCount,
      },
    ];

    const profileTabs = [
      {
        emoji: "✍️",
        text: "Edit profile",
        href: "/profile/edit",
      },
      {
        emoji: "👀",
        text: "View profile",
        href: "/profile",
      },
    ];

    return (
      <div className={"sidebar" + (isVisible ? " sidebar--isOpen" : "")}>
        <div onClick={this.hideSidebar}>
          <LinkTabs tabs={defaultTabs} />
          {isLoggedIn && <LinkTabs tabs={profileTabs} />}
        </div>
        <WhatsappJobAlert />
        <PromotionalPost media={postBg} text="Here’s how Aman made an extra ₹5000 while studying." />
        <ul className="sidebar__footer">
          <li className="sidebar__link">
            <Link to="/business">Post a job</Link>
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
}

const mapStateToProps = state => ({
  isVisible: state.ui.isSidebarOpen,
  isLoggedIn: state.user.isLoggedIn,
  appliedCount: state.user.appliedJobs ? state.user.appliedJobs.length : null,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
