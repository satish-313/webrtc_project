import React, { useState } from "react";

import styles from "./Login.module.css";
import Card from "../../components/shared/card/Card";
import StepPhoneOrEmail from "../steps/stepPhoneOrEmail/StepPhoneOrEmail";
import StepOtp from "../steps/stepOtp/StepOtp";

const steps = {
  1: StepPhoneOrEmail,
  2: StepOtp,
};

const Login = () => {
  let [step, setStep] = useState(1);
  let Step = steps[step];

  const nextStep = () => setStep((step = step + 1));

  return (
    <div className={styles.cardContainer}>
      <Step onclick={nextStep} />
    </div>
  );
};

export default Login;
