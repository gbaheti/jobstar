import React from 'react';

import './styles.css';
 
const Header = (props) => {
  return (
    <div className="header">
      <h2>Part-time Jobs in {props.jobLocation}</h2>
      <p>Showing {props.jobCount} part time jobs in {props.jobLocation}</p>
    </div>
  );
}

export default Header;