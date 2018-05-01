import React, { Component } from "react";
import { connect } from "react-redux";

import Register from "../register";
import Modal from "../modal";
import Confirmation from "../confirmation";
import ProfileDetails from "../profileDetails";
import Success from "../success";

import { sendOtp, confirmOtp, saveProfile, closeRegistrationModal } from "../../actions";

import "./styles.css";

class RegisterFlow extends Component {
  state = {
    phoneNumber: null,
    otp: null,
    name: null,
    city: null,
    dobDate: null,
    dobMonth: null,
    dobYear: null,
    error: null,
  };

  getModalProps = () => {
    switch (this.props.currentState) {
      case "register":
        return {
          heading: "Register",
          btnText: "continue",
          onSubmit: this.onPhoneNumberSubmit,
          onClose: this.onClose,
          component: (
            <Register
              handlePhoneInput={this.onEnterPhoneNumber}
              handleFbLogin={this.onFbLogin}
              fbLoginCb={this.onFbLoginResponse}
              error={this.state.error}
            />
          ),
        };

      case "confirmation":
        return {
          heading: "Confirmation",
          btnText: "done",
          onSubmit: this.onOtpSubmit,
          component: <Confirmation handleOTPInput={this.onEnterOtp} resendOtp={this.onPhoneNumberSubmit} error={this.state.error} />,
        };

      case "profileDetails":
        return {
          heading: "Final details...",
          btnText: "done",
          onSubmit: this.onProfileSubmit,
          onClose: this.onClose,
          component: (
            <ProfileDetails
              handleNameInput={this.onEnterName}
              handleDateInput={this.onEnterDate}
              handleMonthInput={this.onEnterMonth}
              handleYearInput={this.onEnterYear}
              handleCityInput={this.onEnterCity}
              error={this.state.error}
            />
          ),
        };

      case "success":
        return {
          heading: "Congratulations!",
          btnText: "next",
          onSubmit: this.onClose,
          onClose: this.onClose,
          component: <Success />,
        };

      default:
        return {
          heading: null,
          btnText: null,
          onSubmit: null,
          onClose: null,
          component: <div style={{ padding: "20%" }} />,
        };
    }
  };

  onFbLogin = () => {};

  onFbLoginResponse = res => {
    console.log("CB:", res);
  };

  validatePhoneNumber = () => {
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    const isValid = phoneRegex.test(this.state.phoneNumber);

    return isValid;
  };

  onEnterPhoneNumber = e => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  onPhoneNumberSubmit = () => {
    if (this.validatePhoneNumber()) {
      this.setState({ error: null });
      this.props.sendOtp(this.state.phoneNumber);
    } else {
      this.setState({ error: "Please check the phone number. 🤔" });
    }
  };

  validateOtp = () => {
    const isValid = this.state.otp && this.state.otp.length === 4;

    return isValid;
  };

  onEnterOtp = e => {
    this.setState({
      otp: e.target.value,
    });
  };

  onOtpSubmit = () => {
    if (this.validatePhoneNumber() && this.validateOtp()) {
      this.setState({ error: null });
      this.props.confirmOtp(this.state.phoneNumber, this.state.otp);
    } else {
      this.setState({ error: "Please check the otp. 🤔" });
    }
  };

  validateProfile = () => {
    const isValidDate = !isNaN(Date.parse(`${this.state.dobYear}-${this.state.dobMonth}-${this.state.dobDate}`));
    const isValid = this.state.name && this.state.city && isValidDate;

    return isValid;
  };

  onEnterName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onEnterDate = e => {
    this.setState({
      dobDate: e.target.value,
    });
  };

  onEnterMonth = e => {
    this.setState({
      dobMonth: e.target.value,
    });
  };

  onEnterYear = e => {
    this.setState({
      dobYear: e.target.value,
    });
  };

  onEnterCity = e => {
    this.setState({
      city: e.target.value,
    });
  };

  onProfileSubmit = () => {
    if (this.validateProfile()) {
      this.setState({ error: null });
      this.props.saveProfile({
        name: this.state.name,
        city: this.state.city,
        dob: `${this.state.dobDate}/${this.state.dobMonth}/${this.state.dobYear}`,
      });
    } else {
      this.setState({ error: "Please check your details. 🤔" });
    }
  };

  onClose = () => {
    this.setState({
      phoneNumber: null,
      otp: null,
      error: null,
    });

    this.props.closeRegistrationModal();
  };

  render() {
    const { isOpen } = this.props;
    const modalProps = this.getModalProps();

    return <Modal isOpen={isOpen} {...modalProps} />;
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.registration.isOpen,
    currentState: state.registration.currentState,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendOtp: phoneNumber => dispatch(sendOtp(phoneNumber)),
    confirmOtp: (phoneNumber, otp) => dispatch(confirmOtp(phoneNumber, otp)),
    saveProfile: profile => dispatch(saveProfile(profile)),
    closeRegistrationModal: () => dispatch(closeRegistrationModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlow);
