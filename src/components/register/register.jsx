import React from "react";
import FacebookLogin from "react-facebook-login";

import { isMobile } from '../../utils';

import fbLogo from "../../assets/fb.png";

const Register = props => {
  const { fbLoginCb, error } = props;
  console.log('ismobile', isMobile());
  return (
    <div className="register">
      <h2>Get instant access to 1000+ jobs</h2>
      <div className="register__form">
        <FacebookLogin
          appId="164437664237055"
          fields="name,email,gender"
          callback={fbLoginCb}
          isMobile={isMobile()}
          disableMobileRedirect={true}
          cssClass="input-grp register__fb"
          textButton="Continue with facebook"
          scope="public_profile,email"
          icon={<img src={fbLogo} alt="fb-logo" />}
        />
        {/* <p className="seperator">or</p>
        <div className={"input-grp register__input" + (error ? " input--error" : "")}>
          <img src={mobile} alt="phone-icon" />
          <input type="tel" placeholder="Enter phone number" onChange={handlePhoneInput} />
        </div> */}
        {error && <p className="text--error">{error}</p>}
        <p className="input-desc">(Register/Login using your facebook account)</p>
      </div>
    </div>
  );
};

export default Register;
