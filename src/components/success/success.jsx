import React from "react";

import check from "../../assets/check.svg";

const Success = () => {
  return (
    <div className="success">
      <h2>You have successfully registered.</h2>
      <img src={check} alt="check-icon" />
      <h2>But your profile is only 10% complete…</h2>
      <p>Get more responses by completing your profile.</p>
    </div>
  );
};

export default Success;
