import React from "react";
import HeroText from "./HeroText";
import HeroSectionStyled from "./styles/HeroSectionStyled";
import Mockups from "../assets/images/illustration-mockups.svg";

const HeroSection = () => {
  return (
    <HeroSectionStyled>
      <HeroText></HeroText>
      <img src={Mockups} alt="" />
    </HeroSectionStyled>
  );
};

export default HeroSection;
