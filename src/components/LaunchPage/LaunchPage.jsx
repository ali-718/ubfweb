import React from "react";
import styles from "./LaunchPage.module.scss";
import logo from "../../assets/logoText.svg";
import highlighter1 from "../../assets/highLighter1.svg";
import firstStyle from "../Home/Home.module.scss";

export const LaunchPage = () => {
  return (
    <div style={{ minHeight: window.innerHeight }} className={styles.box}>
      <img src={logo} />

      <p className={styles.heading}>Coming Soon</p>

      <div className={styles.highLighterHeadingOne}>
        <p>Feeding people across the United States</p>
        <img className={styles.highlighter1} src={highlighter1} />
      </div>
    </div>
  );
};
