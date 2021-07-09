import React from "react";
import { ContainerWrapper } from "../styles";
import { NavBar } from "../components";

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <NavBar />
      {children}
    </ContainerWrapper>
  );
};
