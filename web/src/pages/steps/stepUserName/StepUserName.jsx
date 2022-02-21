import React from "react";

import styles from "./StepUserName.module.css";

const StepUserName = ({onclick}) => {
  return (
    <div>
      step username
      <button onClick={onclick}>next</button>
    </div>
  );
};

export default StepUserName;
