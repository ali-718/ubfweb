import React, { useState } from "react";
import { Donate } from "../../components/Donate/Donate";
import validator from "validator";
import { useDispatch } from "react-redux";
import * as actions from "../../Redux/Actions/DonationActions";

export const DonatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selector, setSelector] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [distrubition, setDistrubition] = useState(50);
  const [tab, setTab] = useState(0);
  const [paymentMode, setPaymentMode] = useState(0);
  const [otherAmount, setOtherAmount] = useState("");
  const [isModalopen, setisModalopen] = useState(false);
  // data
  const [FirstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [errors, seterrors] = useState([]);

  const changeFrequency = (val) => {
    setTab(0);

    setSelector(val);
  };

  const OnDonationSelection = (val) => {
    if (donationAmount === "") return;

    if (
      donationAmount === "Other Amount" &&
      !validator.isNumeric(otherAmount)
    ) {
      alert("Please enter a valid amount!");
      return;
    }

    setTab(val);
  };

  const cardNonceResponseReceived = (
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) => {
    if (
      FirstName.trim().length === 0 ||
      lastname.trim().length === 0 ||
      email.trim().length === 0
    ) {
      seterrors(["Kindly fill all fields"]);
      return;
    }

    if (!validator.isEmail(email.trim())) {
      seterrors(["Incorrect Email Format"]);
      return;
    }

    if (errors) {
      seterrors(errors.map((error) => error.message));
      return;
    }

    seterrors([]);

    setIsLoading(true);

    actions
      .attemptCharge({
        nonce,
        buyerVerificationToken,
        amount:
          donationAmount === "Other Amount"
            ? otherAmount.replace("$", "").replace("USD", "").trim()
            : donationAmount.replace("$", "").replace("USD", "").trim(),
        cause_distribution: distrubition,
        overhead_distribution: 100 - distrubition,
        first_name: FirstName,
        last_name: lastname,
        email,
      })
      .then(() => {
        setIsLoading(false);
        setisModalopen(true);
      })
      .catch((e) => {
        setIsLoading(false);
        seterrors(
          e.map((error) =>
            error.detail.includes("PAN_FAILURE")
              ? "Invalid credit card details"
              : error.detail
          )
        );
      });
  };

  return (
    <Donate
      donationAmount={donationAmount}
      selector={selector}
      setSelector={changeFrequency}
      setDonationAmount={setDonationAmount}
      distrubition={distrubition}
      setDistrubition={setDistrubition}
      OnDonationSelection={OnDonationSelection}
      tab={tab}
      paymentMode={paymentMode}
      setOtherAmount={setOtherAmount}
      otherAmount={otherAmount}
      setPaymentMode={setPaymentMode}
      cardNonceResponseReceived={cardNonceResponseReceived}
      // data
      setFirstName={setFirstName}
      FirstName={FirstName}
      lastname={lastname}
      setLastname={setLastname}
      email={email}
      setEmail={setEmail}
      errors={errors}
      isLoading={isLoading}
      isModalOpen={isModalopen}
      closeModal={() => {
        setisModalopen(false);
        setTab(0);
      }}
    />
  );
};
