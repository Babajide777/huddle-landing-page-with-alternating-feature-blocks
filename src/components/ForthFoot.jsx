import React from "react";
import ForthFootStyled from "./styles/ForthFootStyled";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const ForthFoot = () => {
  return (
    <ForthFootStyled>
      <div className="socials">
        <RiFacebookFill></RiFacebookFill>
        <FaTwitter></FaTwitter>
        <BsInstagram></BsInstagram>
      </div>
      &copy; Copyright 2018 Huddle. All rights reserved.
    </ForthFootStyled>
  );
};

export default ForthFoot;
