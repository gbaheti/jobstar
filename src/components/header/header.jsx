import React from "react";

import "./styles.css";

const Header = props => {
  const path = window.location.pathname.slice(1);

  switch (path) {
    case "jobs":
      return (
        <div className="header">
          <h2>Part-time Jobs in {props.jobLocation}</h2>
          <p>
            Showing {props.jobCount} part time jobs in {props.jobLocation}
          </p>
        </div>
      );
    case "applied":
      return (
        <div className="header">
          <h2>Your Applications</h2>
          <p>You have applied for {props.appliedCount} jobs.</p>
        </div>
      );
    case "profile":
      return (
        <div className="header">
          <h2>Hi {props.user}</h2>
          <p>Here’s how your profile looks.</p>
        </div>
      );
    case "profile/edit":
      return (
        <div className="header">
          <h2>Edit your profile</h2>
          <p>Good looking profiles get more attention.</p>
        </div>
      );
    default:
      return null;
  }
};

export default Header;
