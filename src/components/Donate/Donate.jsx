import React from "react";
import { PageContainer } from "../../containers/PageContainer";
import styles from "./Donate.module.scss";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { SmallButton } from "../Buttons/SmallButton";
import {
  SquarePaymentForm,
  CreditCardNumberInput,
  CreditCardExpirationDateInput,
  CreditCardPostalCodeInput,
  CreditCardCVVInput,
  CreditCardSubmitButton,
} from "react-square-payment-form";
import "react-square-payment-form/lib/default.css";
import ReactLoading from "react-loading";
import { APPLICATION_ID, LOCATION_ID, SANDBOX } from "../../hooks/config";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import checked from "../../assets/checked.png";
import Box from "@material-ui/core/Box";

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

const modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

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
  isLoading,
  isModalOpen,
  closeModal,
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
                      sandbox={SANDBOX}
                      applicationId={APPLICATION_ID}
                      locationId={LOCATION_ID}
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

                      {isLoading ? (
                        <div className={styles.loadingBox}>
                          <ReactLoading
                            type={"spin"}
                            color={"#6b38fb"}
                            height={50}
                            width={50}
                          />
                        </div>
                      ) : (
                        <CreditCardSubmitButton>
                          Pay{" "}
                          {donationAmount === "Other Amount"
                            ? `$${otherAmount} USD`
                            : donationAmount}
                        </CreditCardSubmitButton>
                      )}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={modalstyle}>
          <img src={checked} />

          <p className={styles.modalHeading}>Thank you for the donation!</p>

          <SmallButton
            onClick={closeModal}
            text={"Continue"}
            classname={styles.modalbutton}
          />
        </Box>
      </Modal>
    </PageContainer>
  );
};
