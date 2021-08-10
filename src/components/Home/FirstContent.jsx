import React from "react";
import styles from "./Home.module.scss";
import highlighter1 from "../../assets/highLighter1.svg";
import highlighter2 from "../../assets/highLighter2.svg";
import { useWindowSize } from "../../hooks/useWindowize";
import { SmallButton } from "../Buttons/SmallButton";

export const FirstContent = () => {
  const { width } = useWindowSize();

  return (
    <div className={styles.firstContentBox}>
      <div className={styles.firstContentImageBox}>
        <div className={styles.highLighterOneBox}>
          <div className={styles.highLighterHeadingOne}>
            <p>Feeding people across the United States</p>
            <img className={styles.highlighter1} src={highlighter1} />
          </div>

          <div className={styles.headingTwo}>
            {width <= 800 ? (
              <p>Who would like to feed today?</p>
            ) : (
              <p>
                Who would like to <br /> feed today?
              </p>
            )}
          </div>
          <div className={styles.headingThree}>
            <input placeholder="Feed African American women in Essex County, NJ" />
            <SmallButton text={"Donate"} classname={styles.button} />
          </div>
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
          <div className={styles.contentsTextSecond}>
            <p>
              We work with the food suppliers (restaurants) to identify the food
              items that otherwise would go to waste and offer them a discounted
              price for the food. The donors as well as food channel partners
              will get full tax benefits for their financial contributions. UBF
              will act as a bridge between the three parties and ensure full
              transparency throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
