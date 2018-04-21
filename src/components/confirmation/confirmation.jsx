import React from 'react';

const Confirmation = (props) => {
  const { handleOTPInput } = props;
  
  return (
    <div className="confirmation">
      <h2>Enter OTP Code</h2>
      <input type="password" placeholder="Enter OTP" className="confirmation__input" onChange={handleOTPInput} />
      <button className="confirmation__resend">
        Resend OTP
      </button>
    </div>
  );
}

export default Confirmation;