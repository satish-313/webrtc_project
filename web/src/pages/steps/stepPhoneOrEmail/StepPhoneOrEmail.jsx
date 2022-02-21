import React from "react";

import styles from "./StepPhoneOrEmail.module.css";


const StepPhoneOrEmail = ({onclick}) => {
  return (
    <div>
      step phone or email
      <button onClick={onclick}>next</button>
    </div>
  );
};

export default StepPhoneOrEmail;
