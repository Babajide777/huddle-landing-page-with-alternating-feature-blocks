import React from "react";
import ButtonStyled from "./styles/ButtonStyled";

const Button = ({ children, bg }) => {
  return (
    <>
      <ButtonStyled bg={bg}>{children}</ButtonStyled>
    </>
  );
};

export default Button;
