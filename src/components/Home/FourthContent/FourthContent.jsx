import React from "react";
import styles from "./FourthContent.module.scss";
import oneIcon from "../../../assets/oneIcon.svg";
import twoIcon from "../../../assets/twoIcon.svg";
import threeIcon from "../../../assets/threeIcon.svg";
import food1 from "../../../assets/food1.png";
import food2 from "../../../assets/food2.png";
import food3 from "../../../assets/food3.png";
import { SmallButton } from "../../Buttons/SmallButton";

const NumberIconContainer = ({ image, heading, text }) => (
  <div className={styles.iconContainer}>
    <img className={styles.iconImage} src={image} />

    <div>
      <p className={styles.iconHeading}>{heading}</p>
      <p className={styles.iconText}>{text}</p>
    </div>
  </div>
);

export const FourthContent = () => {
  return (
    <div className={styles.Box}>
      <p className={styles.heading}>
        Are you someone who needs a warm plate of food on a daily basis?
      </p>
      <p className={styles.subHeading}>
        Get a warm plate of food in <span>3 easy steps</span>
      </p>

      <div className={styles.belowContent}>
        <div className={styles.leftContent}>
          <NumberIconContainer
            image={oneIcon}
            heading={"Sign Up"}
            text={
              "Sign up on our platform by answering a few questions. We determine your eligibility based on the documents you provide. "
            }
          />

          <NumberIconContainer
            image={twoIcon}
            heading={"Get Approved"}
            text={
              "Once approved, you receive access to participating restaurants within your location. "
            }
          />

          <NumberIconContainer
            image={threeIcon}
            heading={"Receive your meal"}
            text={
              "Using your QR code, pick up a meal at a participating restaurant. "
            }
          />
        </div>

        <div className={styles.rightContent}>
          <img src={food1} className={styles.image1} />

          <div className={styles.imageContainer}>
            <img src={food2} className={styles.image2} />
            <img src={food3} className={styles.image2} />
          </div>

          <p className={styles.rightContentHeading}>
            Get your warm <br /> meal today
          </p>

          <SmallButton classname={styles.button} text={"Sign up"} />
        </div>
      </div>
    </div>
  );
};
