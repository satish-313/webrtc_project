import React from "react";

import styles from "./StepName.module.css";

const StepName = ({onclick}) => {
  return (
    <div>
      step name
      <button onClick={onclick}>next</button>
    </div>
  );
};

export default StepName;
