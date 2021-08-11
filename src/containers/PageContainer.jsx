import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Home/Footer/Footer";
import styles from "../components/Home/Home.module.scss";

export const PageContainer = (props) => {
  return (
    <div className={styles.Box}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
