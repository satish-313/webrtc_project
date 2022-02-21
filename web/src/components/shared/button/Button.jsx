import React from "react";

import styles from "./Button.module.css";

const Button = ({ text,onclick }) => {
  return (
    <button onClick={onclick} className={styles.button}>
      <span>{text}</span>
      <img src={`/images/arrow_forward.svg`} alt="next" />
    </button>
  );
};

export default Button;
