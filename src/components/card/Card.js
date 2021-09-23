import React from "react";
import "./card.scss";
import { useGlobalContext } from "../../context";
import { GoLocation } from "react-icons/go";
import { AiOutlineChrome } from "react-icons/ai";
import { UserInfoContainer, Title } from "../components.style";

function Card() {
  const { gitUser } = useGlobalContext();
  const {
    bio,
    company,
    avatar_url,
    location,
    name,
    twitter_username,
    html_url,
    blog,
  } = gitUser;
  return (
    <UserInfoContainer className="card">
      <Title>User</Title>
      <div className="container">
        <header>
          <div className="img">
            <img src={avatar_url} alt="" />
          </div>
          <div className="name">
            <h4>{name}</h4>
            <p>@{twitter_username}</p>
          </div>
          <div className="follow">
            <a href="">Follow Me</a>
          </div>
        </header>
        <div className="bio">
          <p>{bio}ngfnfmgnfng</p>
        </div>
        <div className="others">
          <div className="location other-details">
            <GoLocation className="icon" />
            <p>{location}</p>
          </div>
          <div className="website other-details">
            <AiOutlineChrome className="icon" />
            <a href={html_url}>{html_url}</a>
          </div>
        </div>
      </div>
    </UserInfoContainer>
  );
}

export default Card;
