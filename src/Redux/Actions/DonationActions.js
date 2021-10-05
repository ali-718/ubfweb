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
    axios
      .post(
        "https://49e1wa11jc.execute-api.us-east-1.amazonaws.com/dev/donation",
        {
          nonce,
          verification_token: buyerVerificationToken,
          amount: parseInt(amount),
          sandbox: SANDBOX,
          cause_distribution: cause_distribution,
          overhead_distribution: overhead_distribution,
          first_name: first_name,
          last_name: last_name,
          email: email,
        }
      )
      .then((res) => {
        resolve();
      })
      .catch((e) => {
        reject(
          e.response.data === ""
            ? [{ detail: "Some error occoured, please try again later" }]
            : e.response.data.errors
        );
      });
  });
