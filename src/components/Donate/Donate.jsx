import React from "react";
import { PageContainer } from "../../containers/PageContainer";
import styles from "./Donate.module.scss";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SmallButton } from "../Buttons/SmallButton";
import cardIcon from "../../assets/cardIcon.svg";
import cardDateiconsvg from "../../assets/cardDateicon.svg";
import cvvIcon from "../../assets/cvvIcon.svg";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    marginTop: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#6b38fb",
    border: "2px solid #6b38fb",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
    color: "#6b38fb",
    content: "%",
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6b38fb",
  },
  rail: {
    height: 8,
    backgroundColor: "#7e858e",
    borderRadius: 4,
  },
})(Slider);

export const Donate = ({
  selector,
  setSelector,
  donationAmount,
  setDonationAmount,
  distrubition,
  setDistrubition,
  tab,
  OnDonationSelection,
  paymentMode,
  setPaymentMode,
}) => {
  return (
    <PageContainer>
      <div className={styles.box}>
        <div className={styles.container}>
          {/* left */}
          <div className={styles.leftBox}>
            <div className={styles.contentBox}>
              <div className={styles.selectorBox}>
                <div
                  onClick={() => setSelector(0)}
                  className={
                    selector === 0 ? styles.leftSelected : styles.leftUnselected
                  }
                >
                  <p>Give once</p>
                </div>
                <div
                  onClick={() => setSelector(1)}
                  className={
                    selector === 1
                      ? styles.rightSelected
                      : styles.rightUnselected
                  }
                >
                  <p>Give monthly</p>
                </div>
              </div>

              {tab === 0 ? (
                <div className={styles.amountBox}>
                  <div className={styles.amountHeadingBox}>
                    <p>Choose an amount to give</p>
                  </div>

                  <div className={styles.priceBox}>
                    <div className={styles.priceGrid1}>
                      <div
                        onClick={() => setDonationAmount("$50 USD")}
                        className={
                          donationAmount === "$50 USD"
                            ? styles.priceBoxSelected
                            : styles.priceBoxUnselected
                        }
                      >
                        <p>$50 USD</p>
                      </div>
                      <div
                        onClick={() => setDonationAmount("$100 USD")}
                        className={
                          donationAmount === "$100 USD"
                            ? styles.priceBoxSelected
                            : styles.priceBoxUnselected
                        }
                      >
                        <p>$100 USD</p>
                      </div>
                      <div
                        onClick={() => setDonationAmount("$150 USD")}
                        className={
                          donationAmount === "$150 USD"
                            ? styles.priceBoxSelected
                            : styles.priceBoxUnselected
                        }
                      >
                        <p>$150 USD</p>
                      </div>
                    </div>
                    <div className={styles.priceGrid2}>
                      <div
                        onClick={() => setDonationAmount("$200 USD")}
                        className={
                          donationAmount === "$200 USD"
                            ? styles.priceBoxSelected
                            : styles.priceBoxUnselected
                        }
                      >
                        <p>$200 USD</p>
                      </div>
                      <div
                        onClick={() => setDonationAmount("Other Amount")}
                        className={
                          donationAmount === "Other Amount"
                            ? styles.priceBoxSelectedLarge
                            : styles.priceBoxUnselectedLarge
                        }
                      >
                        <p>Other Amount</p>
                      </div>
                    </div>

                    <div className={styles.sliderHeading}>
                      <p>Choose the distribution</p>

                      <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        value={distrubition}
                        onChange={(e, value) => setDistrubition(value)}
                        valueLabelFormat={(value) => (
                          <p className={styles.sliderValue}>{value}%</p>
                        )}
                      />

                      <div className={styles.sliderLabelBox}>
                        <p>to cause</p>
                        <p>Overhead</p>
                      </div>

                      <SmallButton
                        onClick={() => OnDonationSelection(1)}
                        classname={styles.button}
                        text={"Donate"}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.amountBox}>
                  <div className={styles.amountHeadingBox}>
                    <p>
                      You’re giving {donationAmount}{" "}
                      <span onClick={() => OnDonationSelection(0)}>
                        (edit amount)
                      </span>
                    </p>
                  </div>

                  <div className={styles.modeBox}>
                    <div className={styles.modeHeadingBox}>
                      <div
                        onClick={() => setPaymentMode(0)}
                        className={
                          paymentMode === 0
                            ? styles.modeSelected
                            : styles.modeUnSelected
                        }
                      >
                        <p>Card</p>
                      </div>
                      <div
                        onClick={() => setPaymentMode(1)}
                        className={
                          paymentMode === 1
                            ? styles.modeSelected
                            : styles.modeUnSelected
                        }
                      >
                        <p>Paypal</p>
                      </div>
                    </div>
                    <div className={styles.modeGrid2}>
                      <input
                        placeholder="First name"
                        className={styles.inputName}
                      />
                      <input
                        placeholder="Last name"
                        className={styles.inputSecondName}
                      />
                    </div>
                    <div className={styles.modeGrid2}>
                      <div className={styles.inputBox}>
                        <div className={styles.cardNumberBox}>
                          <img className={styles.icon} src={cardIcon} />

                          <input
                            placeholder="CARD NUMBER"
                            className={styles.cardInput}
                          />
                        </div>
                        <div className={styles.dateBox}>
                          <img className={styles.icon} src={cardDateiconsvg} />

                          <input
                            placeholder="MM / YYYY"
                            className={styles.dateInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.modeGrid2}>
                      <div className={styles.cvvInput}>
                        <img className={styles.icon} src={cvvIcon} />

                        <input placeholder="CVV" />
                      </div>
                    </div>

                    <div className={styles.sliderHeading}>
                      <SmallButton classname={styles.button} text={"Donate"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* right box */}
          <div className={styles.rightBox}>
            <p>
              100% of your donation goes directly to the cause,but only if you
              want to!
            </p>

            <span>
              With our unique system you can choose the percentage of money you
              want to donate directly to the cause or to overhead
            </span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
