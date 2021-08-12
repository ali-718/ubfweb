import React from "react";
import { PageContainer } from "../../containers/PageContainer";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <PageContainer>
      <div className={styles.Box}>
        <div className={styles.Container}>
          <div className={styles.welcomeBox}>
            <p className={styles.welcomeHeading}>Hi Sabrina, Welcome to UBF!</p>
            <p className={styles.welcomeSubtext}>
              Thank you for being part of UBF. With your donation you provided a
              warm plate of food to people that really need it.
            </p>
            <p className={styles.donatedHeading}>
              You donated <span>$150</span> USD this month.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
