import React from "react";
import styles from "./Login.module.scss";
import background from "../../assets/donateBackground.svg";
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import { AuthInputs } from "../Inputs/AuthInputs";
import { SmallButton } from "../Buttons/SmallButton";
import { withRouter } from "react-router-dom";

export const Signup = withRouter((props) => {
  return (
    <div className={styles.Box}>
      <img
        style={{ minHeight: window.innerHeight }}
        src={background}
        className={styles.leftImage}
      />
      <div className={styles.rightBox}>
        <div className={styles.leftSide}>
          <img src={logo} alt={"logo"} />
          &nbsp; &nbsp;
          <img src={logoText} alt={"logoText"} />
        </div>

        <p className={styles.heading}>
          Give a warm plate of food to someone in need
        </p>

        <div className={styles.inputsBox}>
          <AuthInputs placeholder={"Your full name"} label={"Name"} />
        </div>

        <div className={styles.inputsBox}>
          <AuthInputs placeholder={"example@example.com"} label={"Email"} />
        </div>

        <div className={styles.inputsBox}>
          <AuthInputs label={"Password"} />
        </div>

        <div className={styles.inputsBox}>
          <SmallButton classname={styles.button} text={"Login"} />
        </div>
        <div className={styles.policyBox}>
          <p>
            By signing up, I agree to the Treva Privacy Policy and Terms of
            Service.
          </p>
        </div>

        <p className={styles.createAccountText}>
          Already have an account?{" "}
          <span onClick={() => props.history.push("/login")}>Log in</span>
        </p>
      </div>
    </div>
  );
});
