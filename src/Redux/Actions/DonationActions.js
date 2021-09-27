import axios from "axios";
import { LOCATION_ID } from "../../hooks/config";
import { v4 as uuidv4 } from "uuid";

export const attemptCharge = ({ nonce, buyerVerificationToken, amount }) =>
  new Promise((resolve, reject) => {
    axios
      .post(
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
            Authorization:
              "Bearer EAAAEDZGCM_ehmMZbJPB9wuBB_KNM5sl3tX4sCTWbKODqjPxcZGfsNEx2vzoB5Fa",
          },
        }
      )
      .then((res) => {
        console.log("sucess");
        console.log(res.data);
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject();
      });
  });
