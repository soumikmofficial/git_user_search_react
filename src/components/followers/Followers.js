import React from "react";
import { useGlobalContext } from "../../context";
import { UserInfoContainer, Title } from "../components.style";

import "./followers.scss";
function Followers() {
  const { gitFollowers } = useGlobalContext();
  return (
    <UserInfoContainer className="followers">
      <Title>Followers</Title>
      <div className="container">
        <div className="follower-container">
          {gitFollowers.map((follower) => {
            const { html_url, avatar_url, login, id } = follower;

            return (
              <div className="follower" key={id}>
                <div className="img-container">
                  <img src={avatar_url} alt="" />
                </div>
                <div className="name-container">
                  <h4>{login}</h4>
                  <a href={html_url}>{html_url}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserInfoContainer>
  );
}

export default Followers;
