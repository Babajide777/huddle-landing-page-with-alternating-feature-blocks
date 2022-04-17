import React from "react";
import ProfileStyled from "./styles/ProfileStyled";

const Profile = ({ constant }) => {
  const { title, body, image } = constant;
  return (
    <ProfileStyled>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </ProfileStyled>
  );
};

export default Profile;
