import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logoText.svg";
import menuIcon from "../../assets/menuIcon.png";
import { SmallButton } from "../Buttons/SmallButton";
import { useWindowSize } from "../../hooks/useWindowize";
import { Link, withRouter } from "react-router-dom";

export const Header = withRouter((props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);
    window.addEventListener("click", close);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.leftSide}>
          <img src={logo} alt={"logo"} />
          &nbsp; &nbsp;
          <img src={logoText} alt={"logoText"} />
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.dropDownMenuIcon}
        >
          <img className={styles.menuIcon} src={menuIcon} alt={"menu"} />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.menuBoxWithBorder}>
            <p>About UBF</p>
          </div>
          <div className={styles.menuBoxWithBorder}>
            <p>For ReCiPIENTS</p>
          </div>
          <div className={styles.menuBoxWithBorder}>
            <p>For restaurants</p>
          </div>
          <div className={styles.menuBox}>
            <p>Sign up</p>
          </div>

          <div className={styles.menuButtonBox}>
            <Link style={{ textDecoration: "none" }} to={"/donate"}>
              <SmallButton text={"Donate"} classname={styles.button} />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && width < 800 && (
        <div className={styles.dropDownMenuBox}>
          <div className={styles.dropDownMenuItem}>
            <p>About UBF</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <p>For ReCiPIENTS</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <p>For restaurants</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <p>Sign up</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <Link style={{ textDecoration: "none" }} to={"/donate"}>
              <SmallButton
                text={"Donate"}
                classname={styles.menuDropdownButton}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
});
