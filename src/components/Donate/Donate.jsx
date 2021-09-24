import React from "react";
import { PageContainer } from "../../containers/PageContainer";
import styles from "./Donate.module.scss";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SmallButton } from "../Buttons/SmallButton";
import cardIcon from "../../assets/cardIcon.svg";
import cardDateiconsvg from "../../assets/cardDateicon.svg";
import cvvIcon from "../../assets/cvvIcon.svg";
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from "react-square-payment-form";
import "react-square-payment-form/lib/default.css";

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
  setOtherAmount,
  otherAmount,
  cardNonceResponseReceived,
  setFirstName,
  FirstName,
  lastname,
  setLastname,
  email,
  setEmail,
  errors,
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
                      {donationAmount === "Other Amount" ? (
                        <div
                          onClick={() => setDonationAmount("Other Amount")}
                          className={styles.priceBoxUnselectedLarge}
                        >
                          <div className={styles.otherBox}>
                            <input
                              type={"number"}
                              autoFocus
                              placeholder={"Other"}
                              className={styles.donateInput}
                              value={otherAmount}
                              onChange={(e) => {
                                if (e.target.value.length >= 10) return;

                                setOtherAmount(e.target.value);
                              }}
                              maxLength={1}
                            />
                            <p>USD</p>
                          </div>
                        </div>
                      ) : (
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
                      )}
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
                      You’re giving{" "}
                      {donationAmount === "Other Amount"
                        ? `$${otherAmount} USD`
                        : donationAmount}{" "}
                      <span onClick={() => OnDonationSelection(0)}>
                        (edit amount)
                      </span>
                    </p>
                  </div>

                  <div className={styles.modeBox}>
                    {/* <div className={styles.modeHeadingBox}>
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
                    </div> */}

                    <div className={styles.modeGrid2}>
                      <span class="sq-label">First Name</span>
                      <input
                        placeholder="First name"
                        className={styles.inputName}
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className={styles.modeGrid2}>
                      <span class="sq-label">Last Name</span>
                      <input
                        placeholder="Last name"
                        className={styles.inputSecondName}
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div className={styles.modeGrid2}>
                      <span class="sq-label">Email</span>
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.inputName}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      />
                    </div>
                    {/* <div className={styles.modeGrid2}>
                      <div className={styles.cvvInput}>
                        <img className={styles.icon} src={cvvIcon} />

                        <input placeholder="CVV" />
                      </div>
                    </div> */}

                    {/* <div className={styles.sliderHeading}>
                      <SmallButton classname={styles.button} text={"Donate"} />
                    </div> */}

                    <SquarePaymentForm
                      sandbox={true}
                      applicationId={"sandbox-sq0idb-0UKNfLQ55CGCy_arO6HsCw"}
                      locationId={"L1A9FB00MT48T"}
                      cardNonceResponseReceived={cardNonceResponseReceived}
                      createVerificationDetails={() => ({
                        amount:
                          donationAmount === "Other Amount"
                            ? otherAmount
                            : donationAmount,
                        currencyCode: "USD",
                        intent: "CHARGE",
                        billingContact: {
                          familyName: FirstName,
                          givenName: lastname,
                          email: email,
                          country: "US",
                          city: "none",
                          addressLines: ["none"],
                          postalCode: "none",
                          phone: "none",
                        },
                      })}
                    >
                      <fieldset className="sq-fieldset">
                        <CreditCardNumberInput />
                        <div style={{ marginTop: "1rem" }} />
                        <div className="sq-form-third">
                          <CreditCardExpirationDateInput />
                        </div>

                        <div className="sq-form-third">
                          <CreditCardPostalCodeInput />
                        </div>

                        <div className="sq-form-third">
                          <CreditCardCVVInput />
                        </div>
                      </fieldset>

                      <div className="sq-error-message">
                        {errors.map((errorMessage) => (
                          <li key={`sq-error-${errorMessage}`}>
                            {errorMessage}
                          </li>
                        ))}
                      </div>

                      <CreditCardSubmitButton>
                        Pay{" "}
                        {donationAmount === "Other Amount"
                          ? `$${otherAmount} USD`
                          : donationAmount}
                      </CreditCardSubmitButton>
                    </SquarePaymentForm>
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
