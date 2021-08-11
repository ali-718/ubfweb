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
        Get a warm plate of food for you and your family with{" "}
        <span>3 easy steps</span>
      </p>

      <div className={styles.belowContent}>
        <div className={styles.leftContent}>
          <NumberIconContainer
            image={oneIcon}
            heading={"Sign Up"}
            text={
              "Sign up to our platform and enter you details in order to request the card that will give you the permission to receive a free meal."
            }
          />

          <NumberIconContainer
            image={twoIcon}
            heading={"Get your card"}
            text={
              "One week after your appication you will receive a card. This card will allow you to find your nearest restaurant which is connected with us ."
            }
          />

          <NumberIconContainer
            image={threeIcon}
            heading={"Receive your meal"}
            text={
              "Now you are ready to go to one of our connected restaurants and receive your warm meal for you and your family."
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
