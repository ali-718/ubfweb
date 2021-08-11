import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../assets/logoWhite.svg";
import logoText from "../../../assets/logoTextWhite.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import { SmallButton } from "../../Buttons/SmallButton";

export const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.leftSideContainer}>
          <div className={styles.leftSide}>
            <img src={logo} alt={"logo"} />
            &nbsp; &nbsp;
            <img src={logoText} alt={"logoText"} />
          </div>
          <div className={styles.leftSideBottom}>
            <p className={styles.menuBoxItem}>Find us on</p>

            <div className={styles.socialContainer}>
              <img src={facebook} className={styles.socialsFirst} />
              <img src={twitter} className={styles.socials} />
              <img src={instagram} className={styles.socials} />
            </div>
          </div>
        </div>

        <div className={styles.menuBoxContainer}>
          <div className={styles.menuBox}>
            <p>Get to know us</p>
            <span>About Us</span>
            <span>Meet the team</span>
            <span>Careers</span>
          </div>

          <div className={styles.menuBox}>
            <p>Connect</p>
            <span>Contact Us</span>
            <span>FAQ</span>
          </div>

          <div className={styles.menuBox}>
            <p>Get Involved</p>
            <span>Fundraise</span>
            <span>Restaurant Partnership</span>
            <span>Spread the word</span>
          </div>

          <div className={styles.menuBox}>
            <p>Donate</p>
            <span>Feed someone today</span>
            <span>Give in someone’s honor</span>
          </div>

          <div className={styles.menuItemsBox}>
            <p className={styles.menuBoxItem}>Donate</p>
            <p className={styles.menuBoxItemSpace}>For ReCiPIENTS</p>
            <p className={styles.menuBoxItemSpace}>For restaurants</p>
            <p className={styles.menuBoxItemSpace}>Sign up</p>
            <SmallButton text={"Donate"} classname={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
};
