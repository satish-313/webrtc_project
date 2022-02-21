import React from "react";

import styles from "./StepOtp.module.css";

const StepOtp = ({onclick}) => {
  return (
    <div>
      step otp
      <button onClick={onclick}>next</button>
    </div>
  );
};

export default StepOtp;
