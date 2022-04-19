import React from "react";
import FirstFoot from "./FirstFoot";
import FooterStyled from "./styles/FooterStyled";
import Logo from "../assets/images/logo.svg";
import SecondFoot from "./SecondFoot";
import ThirdFoot from "./ThirdFoot";
import ForthFoot from "./ForthFoot";

const Footer = () => {
  return (
    <FooterStyled>
      <img src={Logo} alt="Logo" className="logo" />
      <div>
        <FirstFoot></FirstFoot>
        <SecondFoot></SecondFoot>
        <ThirdFoot></ThirdFoot>
        <ForthFoot></ForthFoot>
      </div>
    </FooterStyled>
  );
};

export default Footer;
