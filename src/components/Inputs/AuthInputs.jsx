import React from "react";
import styles from "./Inputs.module.scss";

export const AuthInputs = ({ label, placeholder = "" }) => {
  return (
    <div className={styles.InputBox}>
      <p className={styles.label}>{label}</p>

      <input placeholder={placeholder} className={styles.input} />
    </div>
  );
};
