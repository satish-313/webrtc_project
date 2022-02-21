import React, { useState } from "react";

import styles from "./Register.module.css";
import Card from "../../components/shared/card/Card";
import StepPhoneOrEmail from "../steps/stepPhoneOrEmail/StepPhoneOrEmail";
import StepOtp from "../steps/stepOtp/StepOtp";
import StepName from "../steps/stepName/StepName";
import StepAvatar from "../steps/stepAvatar/StepAvatar";
import StepUserName from "../steps/stepUserName/StepUserName";

const steps = {
  1: StepPhoneOrEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};

const Register = () => {
  let [step, setStep] = useState(1);
  let Step = steps[step];

  const nextStep = () => setStep((step = step + 1));

  return (
    <div className={styles.cardContainer}>
      <Step onclick={nextStep} />
    </div>
  );
};

export default Register;
