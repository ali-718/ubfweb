import React from "react";
import { FirstContent } from "./FirstContent";
import { SecondContent } from "./SecondContent/SecondContent";
import { ThirdContent } from "./ThirdContent/ThirdContent";
import { FourthContent } from "./FourthContent/FourthContent";
import { FifthContent } from "./FifthContent/FifthContent";
import { PageContainer } from "../../containers/PageContainer";

export const Home = () => {
  return (
    <PageContainer>
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
    </PageContainer>
  );
};
