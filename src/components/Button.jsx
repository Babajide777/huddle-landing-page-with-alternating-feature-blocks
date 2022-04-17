import React from "react";
import ButtonStyled from "./styles/ButtonStyled";

const Button = ({ children, bg, color }) => {
  return (
    <>
      <ButtonStyled color={color} bg={bg}>
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
