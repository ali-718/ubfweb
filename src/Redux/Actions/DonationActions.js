import axios from "axios";
import { SANDBOX } from "../../hooks/config";

export const attemptCharge = ({
  nonce,
  buyerVerificationToken,
  amount,
  cause_distribution,
  overhead_distribution,
  first_name,
  last_name,
  email,
}) =>
  new Promise((resolve, reject) => {
    console.log({
      nonce,
      buyerVerificationToken,
      amount: parseInt(amount),
      cause_distribution,
      overhead_distribution,
      first_name,
      last_name,
      email,
    });
    axios
      .post(
        "https://49e1wa11jc.execute-api.us-east-1.amazonaws.com/dev/donation",
        JSON.stringify({
          nonce,
          verification_token: buyerVerificationToken,
          amount: parseInt(amount),
          sandbox: SANDBOX,
          cause_distribution: cause_distribution,
          overhead_distribution: overhead_distribution,
          first_name: first_name,
          last_name: last_name,
          email: email,
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
