import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './footer.css'
import logo from '../../assets/logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__content">
          <img src={logo} alt="jobstar-logo" />
          <ul className="footer__keywords">
            <li className="link-item">
              <a href="#">Part-time Jobs</a>
            </li>
            <li className="link-item">
              <a href="#">Task based jobs</a>
            </li>
            <li className="link-item">
              <a href="#">Hire flexi workers</a>
            </li>
            <li className="link-item">
              <a href="#">Online jobs</a>
            </li>
            <li className="link-item">
              <a href="#">Work from home jobs</a>
            </li>
          </ul>
          <ul className="footer__links">
            <li className="link-item">
              <a href="#">Privacy</a>
            </li>
            <li className="link-item">
              <a href="#">Contact</a>
            </li>
            <li className="link-item">
              <a href="#">Sitemap</a>
            </li>
            <li className="link-item">
              <a href="#">About us</a>
            </li>
            <li className="link-item">
              <a href="#">Start hiring</a>
            </li>
          </ul>
          <div className="footer__i18n">
            <Select 
              className="footer__select"
              name="lang" 
              placeholder="English"
              disabled={true}
            />
            <p>Made in India</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;