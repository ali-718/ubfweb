import React from "react";
import styles from "./ThirdContent.module.scss";
import homeStyles from "../../Home/Home.module.scss";
import secondContentStyles from "../SecondContent/SecondContent.module.scss";
import USA from "../../../assets/purpleUSA.svg";
import highLighter4 from "../../../assets/highLighter4.svg";

export const ThirdContent = () => {
  return (
    <div className={homeStyles.firstContentBox}>
      <div className={styles.Box}>
        <div>
          <p className={styles.heading}>
            Help us feed <br />
            Americans in need
          </p>
          <div className={styles.leftBox}>
            <div>
              <div>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>2.348</p>
                    <img className={styles.highlighter} src={highLighter4} />
                    <span>resturants connected</span>
                  </div>
                  <div className={styles.subTextBox}>
                    <p>
                      We are connected with over 2.348 restaurants all over U.S
                      and we are still growing.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.secondBox}>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>12.000</p>
                    <img className={styles.highlighter} src={highLighter4} />
                    <span>kg of food</span>
                  </div>
                  <div className={styles.subTextBox}>
                    <p>
                      We are connected with over 2.348 restaurants all over U.S
                      and we are still growing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.secondColumn}>
              <div>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>8.512</p>
                    <img className={styles.highlighter} src={highLighter4} />
                    <span>people fed</span>
                  </div>
                  <div className={styles.subTextBox}>
                    <p>
                      We are connected with over 2.348 restaurants all over U.S
                      and we are still growing.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.secondBox}>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>47.635</p>
                    <img className={styles.highlighter} src={highLighter4} />
                    <span>meals served</span>
                  </div>
                  <div className={styles.subTextBox}>
                    <p>
                      We are connected with over 2.348 restaurants all over U.S
                      and we are still growing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={USA} className={styles.image} />
      </div>

      <p className={styles.headingTwo}>
        Save lives by donating <span>today</span>
      </p>
    </div>
  );
};
