import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/button/Button";

const Home = () => {
  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/register", { replace: false });
  };

  return (
    <div className={styles.cardContainer}>
      <Card title="welcome to my house" logo="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onclick={startRegister} text="get your username"></Button>
        </div>
        <div className={styles.signIn}>
          <span>Have an invite text? </span>
          <Link style={{ textDecoration: "none" }} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
