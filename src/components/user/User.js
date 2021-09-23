import React from "react";
import "./user.scss";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import UserInfoContainer from "../components.style";

function User() {
  return (
    <div className="user">
      <UserInfoContainer></UserInfoContainer>
      <UserInfoContainer></UserInfoContainer>
      <Card />
      <Followers />
    </div>
  );
}

export default User;
