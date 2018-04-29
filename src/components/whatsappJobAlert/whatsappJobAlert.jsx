import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../button/button";
import { sendJobAlerts } from "../../actions";

import "./styles.css";
import whatsappLogo from "../../assets/whatsapp-logo.png";

class WhatsappJobAlert extends Component {
  state = {
    error: null,
    phoneNumber: null,
  };

  validatePhoneNumber = () => {
    const phoneRegex = new RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    );
    const isValid = phoneRegex.test(this.state.phoneNumber);

    return isValid;
  };

  onPhoneEnter = e => {
    this.setState({ phoneNumber: e.target.value });
  };

  onPhoneSubmit = e => {
    if (this.validatePhoneNumber()) {
      this.setState({ error: null });
      this.props.sendJobAlerts(this.state.phoneNumber);
    } else {
      this.setState({ error: "Please check the phone number. 🤔" });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <div className="job-alert card">
        <img
          className="job-alert__logo"
          src={whatsappLogo}
          alt="whatsapp-logo"
        />
        <h3 className="job-alert__title">
          Get Job Alerts on Whatsapp for Free
        </h3>
        <div className="job-alert__form">
          <input
            className={error ? "input--error" : ""}
            type="tel"
            name="phone"
            placeholder="Enter whatsapp number"
            onChange={this.onPhoneEnter}
          />
          <Button
            className="job-alert__btn"
            text="get updates"
            type="secondary"
            clickHandler={this.onPhoneSubmit}
          />
        </div>
        {error && <p className="text--error">{error}</p>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendJobAlerts: phoneNumber => dispatch(sendJobAlerts(phoneNumber)),
  };
};

export default connect(null, mapDispatchToProps)(WhatsappJobAlert);
