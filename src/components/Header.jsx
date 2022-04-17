import React from "react";
import HeroSection from "./HeroSection";
import Nav from "./Nav";
import HeaderStyled from "./styles/HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Nav></Nav>
      <HeroSection></HeroSection>
    </HeaderStyled>
  );
};

export default Header;
