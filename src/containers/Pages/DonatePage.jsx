import React, { useState } from "react";
import { Donate } from "../../components/Donate/Donate";

export const DonatePage = () => {
  const [selector, setSelector] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [distrubition, setDistrubition] = useState(50);
  const [tab, setTab] = useState(0);
  const [paymentMode, setPaymentMode] = useState(0);

  const OnDonationSelection = (val) => {
    if (donationAmount === "") return;

    setTab(val);
  };

  return (
    <Donate
      donationAmount={donationAmount}
      selector={selector}
      setSelector={setSelector}
      setDonationAmount={setDonationAmount}
      distrubition={distrubition}
      setDistrubition={setDistrubition}
      OnDonationSelection={OnDonationSelection}
      tab={tab}
      paymentMode={paymentMode}
      setPaymentMode={setPaymentMode}
    />
  );
};
