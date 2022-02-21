import React from "react";

import styles from "./StepAvatar.module.css";

const StepAvatar = ({onclick}) => {
  return (
    <div>
      step avatar
      <button onClick={onclick}>next</button>
    </div>
  );
};

export default StepAvatar;
