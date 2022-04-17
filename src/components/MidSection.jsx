import React from "react";
import constants from "../assets/constants";
import Profile from "./Profile";
import MidSectionStyled from "./styles/MidSectionStyled";

const MidSection = () => {
  return (
    <MidSectionStyled>
      {constants.map((constant) => (
        <Profile key={constant.id} constant={constant}></Profile>
      ))}
    </MidSectionStyled>
  );
};

export default MidSection;
