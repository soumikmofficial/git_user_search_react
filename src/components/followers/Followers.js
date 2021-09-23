import React from "react";
import { useGlobalContext } from "../../context";
import "./followers.scss";
function Followers() {
  const { gitFollowers } = useGlobalContext();
  return (
    <div className="followers">
      <div className="title">Followers</div>
      <div className="container">
        <div className="follower-container">
          {gitFollowers.map((follower) => {
            const { html_url, avatar_url, login, id } = follower;

            return (
              <div className="follower">
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
    </div>
  );
}

export default Followers;
