import React, { Component } from 'react';

import Modal from '../modal/modal';

import './registerFlow.css';
import fbLogo from '../../assets/fb.png';
import mobile from '../../assets/mobile.svg';
import check from '../../assets/check.svg';

/*********************************************************************
 Sub-components
*********************************************************************/

function Register(props) {
  return (
    <div className="register">
      <h2>Get instant access to 1000+ jobs</h2>
      <div className="register__form">
        <button className="input-grp register__fb">
          <img src={fbLogo} alt="fb-logo" />
          continue with facebook
        </button>
        <p className="seperator">or</p>
        <div className="input-grp register__input">
          <img src={mobile} alt="phone-icon" />
          <input type="tel" placeholder="Enter phone number" onChange={props.handlePhoneInput} />
        </div>
        <p className="input-desc">(We will send OTP for confirmation)</p>
      </div>
    </div>
  );
}

function Confirmation(props) {
  return (
    <div className="confirmation">
      <h2>Enter OTP Code</h2>
      <input type="password" placeholder="Enter OTP" className="confirmation__input" onChange={props.handleOTPInput} />
      <button className="confirmation__resend">
        Resend OTP
      </button>
    </div>
  );
}

function ProfileDetails(props) {
  return (
    <div className="profile">
      <div className="profile__form-grp">
        <label>What’s your name?</label>
        <input type="text" name="name" placeholder="Enter name" />
      </div>
      <div className="profile__form-grp">
        <label>Date of Birth</label>
        <div className="profile__input-grp">
          <input type="text" name="date" placeholder="DD" />
          <span>/</span>
          <input type="text" name="month" placeholder="MM" />
          <span>/</span>
          <input type="text" name="year" placeholder="YYYY" />
        </div>
      </div>
      <div className="profile__form-grp">
        <label>Select city</label>
        <input type="text" name="city" placeholder="Enter city name" />
      </div>
    </div>
  );
}

function Success(props) {
  return (
    <div className="success">
      <h2>You have successfully registered.</h2>
      <img src={check} alt="check-icon" />
      <h2>But your profile is only 10% complete…</h2>
      <p>Get more responses by completing your profile.</p>
    </div>
  );
}

/*********************************************************************
 Main component
*********************************************************************/

class RegisterFlow extends Component {
  state = {
    activeState: 'register',
    otp: null,
    phoneNumber: null,
    profile: null
  }

  onEnterPhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  onEnterOTP = (e) => {
    this.setState({
      otp: e.target.value
    });
  }

  sendOTP = () => {
    console.log('OTP sending to : ' + this.state.phoneNumber);

    this.setState({
      activeState: 'confirmation'
    });
  }

  verifyOTP = () => {
    console.log('OTP entered : ' + this.state.otp);

    this.setState({
      activeState: 'profile'
    });
  }

  saveProfileDetails = () => {
    console.log(this.state.profile);

    this.setState({
      activeState: 'success'
    });
  }
  
  redirectToProfile = () => {
    console.log('Naviagte user to profile');
  }

  onModalClose = () => {
    this.props.onExit();
  }
  
  render() {
    switch(this.state.activeState) {
      case 'register': 
        return (
          <Modal isOpen={true} heading="Register" btnText="continue" onSubmit={this.sendOTP} onClose={this.onModalClose} component={
            <Register handlePhoneInput={this.onEnterPhoneNumber} />
          } />
        );

        break;
      case 'confirmation': 
        return (
          <Modal isOpen={true} heading="Confirmation" btnText="done" onSubmit={this.verifyOTP} component={
            <Confirmation handleOTPInput={this.onEnterOTP} />
          } />
        );

      case 'profile':
        return (
          <Modal isOpen={true} heading="Final details…" btnText="done" onSubmit={this.saveProfileDetails} onClose={this.onModalClose} component ={
            <ProfileDetails />
          } />
        );
      
      case 'success':
        return (
          <Modal isOpen={true} heading="Congratulations!" btnText="next" onSubmit={this.onModalClose} component={
            <Success />
          } />
        );

      default: 
        break;
    }
  }
}

export default RegisterFlow;