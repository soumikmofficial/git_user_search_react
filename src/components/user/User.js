import React from "react";
import "./user.scss";
import Card from "../card/Card";
import Followers from "../followers/Followers";

function User() {
  return (
    <div className="user">
      <Card />
      <Followers />
    </div>
  );
}

export default User;
