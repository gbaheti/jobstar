import React, { Component } from "react";
import { connect } from "react-redux";

import Register from "../register";
import Modal from "../modal";
import Confirmation from "../confirmation";
import ProfileDetails from "../profileDetails";
import Success from "../success";

import { sendOtp, confirmOtp, saveProfile, closeRegistrationModal, facebookLogin } from "../../actions";

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
          btnText: false,
          onClose: this.onClose,
          component: (
            <Register
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
              handlePhoneInput={this.onEnterPhoneNumber}
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

  onFbLoginResponse = res => {
    if (res != null && res.name) {
      console.log("CB:", res);

      this.setState({ error: null });

      this.props.facebookLogin(res);
    }
  };

  validatePhoneNumber = () => {
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    const isValid = phoneRegex.test(this.state.phoneNumber);

    return isValid;
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
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    const isValidPhoneNumber = phoneRegex.test(this.state.phoneNumber);
    const isValidDate = !isNaN(Date.parse(`${this.state.dobYear}-${this.state.dobMonth}-${this.state.dobDate}`));
    const isValid = isValidPhoneNumber && this.state.city && isValidDate;

    return isValid;
  };

  onEnterPhoneNumber = e => {
    this.setState({
      phoneNumber: e.target.value,
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
        phone: this.state.phoneNumber,
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
    facebookLogin: (details) => dispatch(facebookLogin(details)),
    saveProfile: profile => dispatch(saveProfile(profile)),
    closeRegistrationModal: () => dispatch(closeRegistrationModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlow);
