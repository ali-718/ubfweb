import axios from "axios";
import { ACCESS_TOKEN, LOCATION_ID } from "../../hooks/config";
import { v4 as uuidv4 } from "uuid";

export const attemptCharge = ({ nonce, buyerVerificationToken, amount }) =>
  new Promise((resolve, reject) => {
    axios
      .get(
        "/payments",
        {
          source_id: nonce,
          verification_token: buyerVerificationToken,
          autocomplete: true,
          location_id: LOCATION_ID,
          amount_money: {
            amount: amount * 100,
            currency: "USD",
          },
          idempotency_key: `#${uuidv4()}`,
        },
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
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
