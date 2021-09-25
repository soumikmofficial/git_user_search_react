import React from "react";
import "./user.scss";
import Card from "../card/Card";
import Followers from "../followers/Followers";

function User() {
  return (
    <div className="user">
      <Card id="card" />
      <Followers id="followers" />
    </div>
  );
}

export default User;
