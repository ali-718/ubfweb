import React from "react";
import styles from "./ThirdContent.module.scss";
import homeStyles from "../../Home/Home.module.scss";
import secondContentStyles from "../SecondContent/SecondContent.module.scss";
import USA from "../../../assets/purpleUSA.svg";
import usMap from "../../../assets/usMap.svg";
import highLighter4 from "../../../assets/highLighter4.svg";
import highLighter5 from "../../../assets/highlighter5.svg";
import donate from "../../../assets/donate.svg";
import highLighterBackground1 from "../../../assets/highLighterBackground1.svg";
import highLighterBackground2 from "../../../assets/highLighterBackground2.svg";
import handShake from "../../../assets/handShake.svg";
import spread from "../../../assets/spread.svg";
import georgiaMap from "../../../assets/georgiaMap.svg";
import distribution from "../../../assets/distribution.svg";
import { SmallButton } from "../../Buttons/SmallButton";

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

      <div className={styles.boxTwo}>
        <div className={styles.facilityBox}>
          <img src={donate} className={styles.facilityIcon} />
          <img
            src={highLighterBackground1}
            className={styles.facilityIconBackground}
          />
          <p className={styles.facilityHeading}>
            Make a donation <br /> and save lives
          </p>
          <p className={styles.facilitySubText}>
            Make a donation today and help someone get a warm plate of food
            immediately. When you make a donation see how your money is spent
            through our dashboard.
          </p>
          <SmallButton text={"Learn how"} classname={styles.button} />
        </div>

        <div className={styles.facilityBoxSpace}>
          <img src={handShake} className={styles.facilityIcon} />
          <img
            src={highLighterBackground2}
            className={styles.facilityIconBackground}
          />
          <p className={styles.facilityHeading}>
            Become our partner
            <br /> and save money
          </p>
          <p className={styles.facilitySubText}>
            Be one of the restaurants that will provide people with a warm plate
            of food. We will pay for your waste food and you will save from your
            tax benefits.
          </p>
          <SmallButton text={"Learn how"} classname={styles.button} />
        </div>

        <div className={styles.facilityBoxSpace}>
          <img src={spread} className={styles.facilityIcon} />
          <img
            src={highLighterBackground2}
            className={styles.facilityIconBackground}
          />
          <p className={styles.facilityHeading}>
            Spread the word
            <br /> it’s good karma
          </p>
          <p className={styles.facilitySubText}>
            Let people know what we do. Spread the word of how transparent and
            direct we are. You will help families have a nice warm nutritius
            meal.
          </p>
          <SmallButton text={"Learn how"} classname={styles.button} />
        </div>
      </div>

      <div className={styles.thirdContentBox}>
        <div>
          <div className={styles.thirdContentHeading}>
            <p>
              How is your donation <br />
              being used?
            </p>
          </div>

          <div className={styles.thirdContentHeading}>
            <img className={styles.thirdContenHighlighter} src={highLighter5} />
            <p>You choose</p>
          </div>
          <br />
          <div className={styles.leftBox}>
            <div>
              <div>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>Choose the state</p>
                  </div>
                  <div className={styles.thirdContentSubText}>
                    <p>
                      Choose the state you want to donate your money. Money
                      could be given to your old neighborhood,church or school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={usMap} className={styles.thirdContentImage} />
      </div>

      <div className={styles.thirdContentBoxTwo}>
        <div>
          <div style={{ opacity: 0 }} className={styles.thirdContentHeading}>
            <p>
              How is your donation <br />
              being used?
            </p>
          </div>

          <div style={{ opacity: 0 }} className={styles.thirdContentHeading}>
            <img className={styles.thirdContenHighlighter} src={highLighter5} />
            <p>You choose</p>
          </div>
          <div className={styles.leftBox}>
            <div>
              <div>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>Choose the people</p>
                  </div>
                  <div className={styles.thirdContentSubText}>
                    <p>
                      Choose the people you want to give your money to. It can
                      be a certain ethnicity, age or even gender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={georgiaMap} className={styles.thirdContentImageTwo} />
      </div>

      <div className={styles.thirdContentBoxTwo}>
        <div>
          <div style={{ opacity: 0 }} className={styles.thirdContentHeading}>
            <p>
              How is your donation <br />
              being used?
            </p>
          </div>

          <div style={{ opacity: 0 }} className={styles.thirdContentHeading}>
            <img className={styles.thirdContenHighlighter} src={highLighter5} />
            <p>You choose</p>
          </div>
          <div className={styles.leftBox}>
            <div>
              <div>
                <div className={styles.headingBox}>
                  <div className={styles.headingTextBox}>
                    <p>Choose the distribution</p>
                  </div>
                  <div className={styles.thirdContentSubText}>
                    <p>
                      Do you want all of your money to be given directly to the
                      cause, or would you like to give an amount to our
                      overhead? You choose!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={distribution} className={styles.thirdContentImageThree} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
