import React from 'react';

const Confirmation = (props) => {
  const { handleOTPInput, resendOtp, error } = props;
  
  return (
    <div className="confirmation">
      <h2>Enter OTP Code</h2>
      <input type="password" placeholder="Enter OTP" className={"confirmation__input" + (error ? " input--error" : "")} onChange={handleOTPInput} />
      {error && <p className="text--error">{error}</p>}
      <button className="confirmation__resend" onClick={resendOtp}>
        Resend OTP
      </button>
    </div>
  );
}

export default Confirmation;