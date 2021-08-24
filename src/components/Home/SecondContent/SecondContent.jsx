import React from "react";
import styles from "./SecondContent.module.scss";
import boy from "../../../assets/boy.png";
import donateIcon from "../../../assets/donateIcon.png";
import weBuyIcon from "../../../assets/weBuyIcon.png";
import resturantIcon from "../../../assets/resturantIcon.png";

export const IconBox = ({ image, heading, text }) => (
  <div className={styles.leftContentContainer}>
    <img className={styles.iconImage} src={image} />
    <div className={styles.iconContainer}>
      <p className={styles.iconHeading}>{heading}</p>
      <p className={styles.iconContent}>{text}</p>
    </div>
  </div>
);

export const SecondContent = () => {
  return (
    <div className={styles.Box}>
      {/* <p className={styles.topHeading}>
        getting together to help those who needs us
      </p> */}
      {/* <p className={styles.heading}>How we do it</p> */}

      <div className={styles.secondContentNewHeadingBox}>
        <p className={styles.newheading}>
          UBF will act as a bridge between restaurants, the needy and the donors
          & ensures full transparency throughout the process.
        </p>
      </div>

      {/* <div className={styles.ContentBox}>
        <img src={boy} className={styles.image} />
        <div className={styles.leftContentBox}>
          <IconBox
            image={donateIcon}
            heading={"YOU DONATE"}
            text={
              "You choose your preferable ethnic group and the state you want to help the most."
            }
          />
          <IconBox
            image={weBuyIcon}
            heading={"We buy the waste food"}
            text={
              "With your donation we buy the waste food of restaurants of your chosen state."
            }
          />
          <IconBox
            image={resturantIcon}
            heading={"Restaurants feed people in need"}
            text={
              "People in need are provided with warm food daily, directly from restaurants"
            }
          />
        </div>
      </div> */}
    </div>
  );
};
