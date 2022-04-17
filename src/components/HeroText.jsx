import React from "react";
import Button from "./Button";
import HeroTextStyled from "./styles/HeroTextStyled";
import theme from "./styles/theme";

const HeroText = () => {
  return (
    <HeroTextStyled>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button bg={theme.color.pink}>Get Started For Free</Button>
    </HeroTextStyled>
  );
};

export default HeroText;
