import React from "react";
import NavStyled from "./styles/NavStyled";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";
import theme from "./styles/theme";

const Nav = () => {
  return (
    <NavStyled>
      <img src={Logo} alt="Logo" />
      <Button bg={theme.color.white} color="black">
        Try It Free
      </Button>
    </NavStyled>
  );
};

export default Nav;
