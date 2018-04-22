import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Register from '../register';
import Modal from '../modal';
import Confirmation from '../confirmation';
import ProfileDetails from '../profileDetails';
import Success from '../success';
import { sendOtp, confirmOtp, saveProfile, closeRegistrationModal } from '../../actions';

import './styles.css';


class RegisterFlow extends Component {
  state = {
    phoneNumber: null,
    otp: null,
    error: null
  }

  validatePhoneNumber = () => {
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    const isValid = phoneRegex.test(this.state.phoneNumber);

    return isValid;
  }

  validateOtp = () => {
    const isValid = this.state.otp && this.state.otp.length === 4;

    return isValid;
  }

  onEnterPhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  onPhoneNumberSubmit = () => {
    if(this.validatePhoneNumber()) {
      this.setState({error: null});
      this.props.sendOtp(this.state.phoneNumber);
    } else {
      this.setState({error: 'Please check the phone number. 🤔'});
    }
  }

  onEnterOtp = (e) => {
    this.setState({
      otp: e.target.value
    });
  }

  onOtpSubmit = () => {
    if(this.validatePhoneNumber() && this.validateOtp()) {
      this.setState({error: null});
      this.props.confirmOtp(this.state.phoneNumber, this.state.otp);
    } else {
      this.setState({error: 'Please check the otp. 🤔'});
    }
  }

  onProfileSubmit = () => {
    this.props.saveProfile();
  }

  onClose = () => {
    this.setState({
      phoneNumber: null,
      otp: null,
      error: null
    });

    this.props.closeRegistrationModal();
  }

  render() {
    const { currentState, isOpen } = this.props;

    return (
      <CSSTransition in={isOpen} timeout={300} classNames="tr-modal-overlay">
        {
          state => {
            switch(currentState) {
              case 'register':  
                return (
                  <Modal heading="Register" btnText="continue" onSubmit={this.onPhoneNumberSubmit} onClose={this.onClose} component={
                    <Register handlePhoneInput={this.onEnterPhoneNumber} error={this.state.error}/>
                  } />
                );

              case 'confirmation':
                return (
                  <Modal heading="Confirmation" btnText="done" onSubmit={this.onOtpSubmit} component={
                    <Confirmation handleOTPInput={this.onEnterOtp} resendOtp={this.onPhoneNumberSubmit} error={this.state.error}/>
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
                return <div></div>;
            }
          }
        }
      </CSSTransition>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.registration.isOpen,
    currentState: state.registration.currentState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOtp: (phoneNumber) => dispatch(sendOtp(phoneNumber)),
    confirmOtp: (phoneNumber, otp) => dispatch(confirmOtp(phoneNumber, otp)),
    saveProfile: () => dispatch(saveProfile()),
    closeRegistrationModal: () => dispatch(closeRegistrationModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFlow);