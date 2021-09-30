import axios from "axios";
import { ACCESS_TOKEN, LOCATION_ID } from "../../hooks/config";
import { v4 as uuidv4 } from "uuid";

export const attemptCharge = ({ nonce, buyerVerificationToken, amount }) =>
  new Promise((resolve, reject) => {
    axios
      .post(
        "/dev/attempt_charge",
        {
          SquareAPI: {
            nonce,
          },
          DonationAmount: { label: `${amount * 100}`, amount: amount * 100 },
          DonationCurrency: "USD",
        },
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log("sucess");
        console.log(res.data);
        resolve();
      })
      .catch((e) => {
        console.log(e.response);
        reject(
          e.response.data === ""
            ? [{ detail: "Some error occoured, please try again later" }]
            : e.response.data.errors
        );
      });
  });
