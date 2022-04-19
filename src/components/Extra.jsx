import React from "react";
import Button from "./Button";
import ExtraStyled from "./styles/ExtraStyled";
import theme from "./styles/theme";

const Extra = () => {
  return (
    <ExtraStyled>
      <h2>Ready To Build Your Community?</h2>
      <Button bg={theme.color.pink} color={theme.color.white}>
        Get Started For Free
      </Button>
    </ExtraStyled>
  );
};

export default Extra;
