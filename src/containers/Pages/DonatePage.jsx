import React, { useState } from "react";
import { Donate } from "../../components/Donate/Donate";
import validator from "validator";

export const DonatePage = () => {
  const [selector, setSelector] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [distrubition, setDistrubition] = useState(50);
  const [tab, setTab] = useState(0);
  const [paymentMode, setPaymentMode] = useState(0);
  const [otherAmount, setOtherAmount] = useState("");

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
    />
  );
};
