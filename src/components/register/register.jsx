import React from 'react';

import fbLogo from '../../assets/fb.png';
import mobile from '../../assets/mobile.svg';

const Register = (props) => {
  const { handlePhoneInput } = props;

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
          <input type="tel" placeholder="Enter phone number" onChange={handlePhoneInput} />
        </div>
        <p className="input-desc">(We will send OTP for confirmation)</p>
      </div>
    </div>
  );
}

export default Register;