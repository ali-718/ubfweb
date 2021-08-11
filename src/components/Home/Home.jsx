import React from "react";
import { Header } from "../Header/Header";
import styles from "./Home.module.scss";
import { FirstContent } from "./FirstContent";
import { SecondContent } from "./SecondContent/SecondContent";
import { ThirdContent } from "./ThirdContent/ThirdContent";
import { FourthContent } from "./FourthContent/FourthContent";
import { FifthContent } from "./FifthContent/FifthContent";
import { Footer } from "./Footer/Footer";

export const Home = () => {
  return (
    <div className={styles.Box}>
      <Header />

      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      <Footer />
    </div>
  );
};
