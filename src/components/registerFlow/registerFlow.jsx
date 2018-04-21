import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Register from '../register';
import Modal from '../modal';
import Confirmation from '../confirmation';
import ProfileDetails from '../profileDetails';
import Success from '../success';
import { sendOtp, confirmOtp, saveProfile, closeRegistrationModal } from '../../actions';


class RegisterFlow extends Component {
  state = {
    phoneNumber: null,
    otp: null
  }

  onEnterPhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  onPhoneNumberSubmit = () => {
    this.props.sendOtp(this.state.phoneNumber);
  }

  onEnterOtp = (e) => {
    this.setState({
      otp: e.target.value
    });
  }

  onOtpSubmit = () => {
    this.props.confirmOtp(this.state.otp);
  }

  onProfileSubmit = () => {
    this.props.saveProfile();
  }

  onClose = () => {
    this.setState({
      phoneNumber: null,
      otp: null
    });

    this.props.closeRegistrationModal();
  }

  render() {
    const { currentState } = this.props;

    switch(currentState) {
      case 'register':  
        return (
          <Modal heading="Register" btnText="continue" onSubmit={this.onPhoneNumberSubmit} onClose={this.onClose} component={
            <Register handlePhoneInput={this.onEnterPhoneNumber}/>
          } />
        );

      case 'confirmation':
        return (
          <Modal heading="Confirmation" btnText="done" onSubmit={this.onOtpSubmit} component={
            <Confirmation handleOTPInput={this.onEnterOtp}/>
          } />
        );

      case 'profileDetails':
        return (
          <Modal heading="Final details..." btnText="done" onSubmit={this.onProfileSubmit} onClose={this.onClose} component={
            <ProfileDetails />
          } />
        );

      case 'success':
        return (
          <Modal heading="Congratulations!." btnText="next" onSubmit={this.onClose} onClose={this.onClose} component={
            <Success />
          } />
        );
  
      default:
        return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentState: state.registration.currentState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOtp: (phoneNumber) => dispatch(sendOtp(phoneNumber)),
    confirmOtp: (otp) => dispatch(confirmOtp(otp)),
    saveProfile: () => dispatch(saveProfile()),
    closeRegistrationModal: () => dispatch(closeRegistrationModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlow);