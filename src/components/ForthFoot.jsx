import React from "react";
import ForthFootStyled from "./styles/ForthFootStyled";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const ForthFoot = () => {
  return (
    <ForthFootStyled>
      <div className="socials">
        <div>
          <RiFacebookFill></RiFacebookFill>
        </div>
        <div>
          <FaTwitter></FaTwitter>
        </div>
        <div>
          <BsInstagram></BsInstagram>
        </div>
      </div>
      <span>&copy; Copyright 2018 Huddle. All rights reserved.</span>
    </ForthFootStyled>
  );
};

export default ForthFoot;
