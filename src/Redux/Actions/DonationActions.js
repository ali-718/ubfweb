import axios from "axios";
import { ACCESS_TOKEN, LOCATION_ID } from "../../hooks/config";
import { v4 as uuidv4 } from "uuid";

export const attemptCharge = ({ nonce, buyerVerificationToken, amount }) =>
  new Promise((resolve, reject) => {
    axios
      .post(
        "https://2wnjzo1dcd.execute-api.us-east-1.amazonaws.com/dev/attempt_charge",
        JSON.stringify({
          SquareAPI: {
            nonce,
          },
          DonationAmount: { label: `${amount}`, amount: parseInt(amount) },
          DonationCurrency: "USD",
        }),
        {
          headers: {
            // Authorization: `Bearer ${ACCESS_TOKEN}`,
            // "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
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
