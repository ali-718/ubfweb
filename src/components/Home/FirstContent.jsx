import React from "react";
import styles from "./Home.module.scss";
import highlighter1 from "../../assets/highLighter1.svg";
import highlighter2 from "../../assets/highLighter2.svg";
import { useWindowSize } from "../../hooks/useWindowize";
import { SmallButton } from "../Buttons/SmallButton";

export const FirstContent = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className={styles.firstContentBox}>
        <div className={styles.highLighterOneBox}>
          <div className={styles.mainHeadingOne}>
            <p>Who would you like to feed today?</p>
          </div>

          <div className={styles.headingThree}>
            <div className={styles.stateInputBox}>
              <div className={styles.inputButtonBox}>
                <SmallButton text={"Donate"} classname={styles.button} />
              </div>
              <input placeholder="Feed African American women in Essex County, NJ" />
            </div>
          </div>
        </div>

        <div className={styles.firstContentImageBox}></div>

        <div className={styles.highLighterHeadingOne}>
          <p>Feeding people across the United States</p>
          <img className={styles.highlighter1} src={highlighter1} />
        </div>
      </div>

      <div className={styles.belowContent}>
        <div className={styles.belowContainer}>
          <p className={styles.headingBelowContent}>What we do</p>
          <img src={highlighter2} className={styles.headingBelowContentImage} />
        </div>
        <div className={styles.belowContentContainer}>
          <div className={styles.contentsText}>
            <p>
              Universal Basic Food is a three-sided marketplace between people
              who are in need of food, donors, and restaurants. Using UBF,
              people in need of warm meals are able to collect food from
              high-street shops, and delivery channels (cloud kitchens, etc)
              free of cost. We ensure their dignity is intact by protecting
              their privacy and making it a seamless experience to procure food.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
