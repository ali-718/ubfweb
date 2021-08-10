import React from "react";
import styles from "./Buttons.module.scss";

export const SmallButton = ({ classname = "", text }) => {
  return (
    <button className={`${classname} ${styles.smallBox}`}>
      <p>{text}</p>
    </button>
  );
};
