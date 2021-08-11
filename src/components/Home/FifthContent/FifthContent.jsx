import React from "react";
import styles from "./FifthContent.module.scss";
import highlighter from "../../../assets/highLighter4.svg";
import { SmallButton } from "../../Buttons/SmallButton";

export const FifthContent = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.container}>
        <div className={styles.headingBox}>
          <p>Interested in being one of our connected restaurants?</p>
          <img src={highlighter} className={styles.highlighter} />
        </div>

        <p className={styles.subHeading}>
          Why throw your waste food when you can sell it to us ? Help us save
          lifes and make a better world.
        </p>

        <input
          className={styles.input}
          placeholder={"Name of your restaurant"}
        />
        <input className={styles.input} placeholder={"Street"} />

        <input className={styles.input} placeholder={"Email"} />
        <SmallButton classname={styles.button} text={"Sign up"} />
      </div>
    </div>
  );
};
