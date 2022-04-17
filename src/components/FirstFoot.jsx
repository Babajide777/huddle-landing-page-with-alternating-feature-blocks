import React from "react";
import FirstFootStyled from "./styles/FirstFootStyled";
import Location from "../assets/images/icon-location.svg";
import Phone from "../assets/images/icon-phone.svg";
import Email from "../assets/images/icon-email.svg";

const FirstFoot = () => {
  return (
    <FirstFootStyled>
      <div>
        <img src={Location} alt="location icon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div>
        <img src={Phone} alt="location icon" />
        <p>+1-543-123-4567</p>
      </div>
      <div>
        <img src={Email} alt="location icon" />
        <p>example@huddle.com</p>
      </div>
    </FirstFootStyled>
  );
};

export default FirstFoot;
