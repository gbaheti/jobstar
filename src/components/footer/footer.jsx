import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li>
          <Link to="/">Part-time Jobs</Link>
        </li>
        <li>
          <Link to="/">Task based jobs</Link>
        </li>
        <li>
          <Link to="/business">Hire flexi workers</Link>
        </li>
        <li>
          <Link to="/">Online jobs</Link>
        </li>
        <li>
          <Link to="/">Work from home jobs</Link>
        </li>
        <li>
          <Link to="/">delhi jobs</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
