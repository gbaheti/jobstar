import React, { Component } from 'react';

import Button from '../../button/button';

import './whatsappJobAlert.css';
import whatsappLogo from '../../../assets/whatsapp-logo.png';

class WhatsappJobAlert extends Component {
  render() {
    return (
      <div className="job-alert card">
        <img className="job-alert__logo img-responsive" src={whatsappLogo} alt="whatsapp-logo" />
        <h3 className="job-alert__title">Get Job Alerts on Whatsapp for Free</h3>
        <div className="job-alert__form">
          <input type="tel" name="phone" placeholder="Enter whatsapp number" required />
          <Button className="job-alert__btn" text="get updates" type="secondary"/>
        </div>
      </div>
    );
  }
}

export default WhatsappJobAlert;