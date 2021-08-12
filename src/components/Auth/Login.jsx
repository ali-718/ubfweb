import React from "react";
import styles from "./Login.module.scss";
import background from "../../assets/donateBackground.svg";
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import { AuthInputs } from "../Inputs/AuthInputs";
import { SmallButton } from "../Buttons/SmallButton";
import { withRouter } from "react-router-dom";

export const Login = withRouter((props) => {
  return (
    <div className={styles.Box}>
      <img
        style={{ minHeight: window.innerHeight }}
        src={background}
        className={styles.leftImage}
      />
      <div className={styles.rightBox}>
        {/* <div className={styles.leftSide}>
          <img src={logo} alt={"logo"} />
          &nbsp; &nbsp;
          <img src={logoText} alt={"logoText"} />
        </div> */}

        <p className={styles.heading}>Hi there, please log in</p>

        <div className={styles.inputsBox}>
          <AuthInputs placeholder={"example@example.com"} label={"Email"} />
        </div>

        <div className={styles.inputsBox}>
          <AuthInputs label={"Password"} />
        </div>

        <div className={styles.inputsBox}>
          <SmallButton classname={styles.button} text={"Login"} />
        </div>
        <div className={styles.forgotBox}>
          <p className={styles.forgotLabel}>Forgot Password?</p>
        </div>

        <p className={styles.createAccountText}>
          Need a Treva account?{" "}
          <span onClick={() => props.history.push("/signup")}>
            Create an account
          </span>
        </p>

        <p className={styles.lastText}>
          ©2001–2019 All Rights Reserved. Treva®
        </p>
      </div>
    </div>
  );
});
