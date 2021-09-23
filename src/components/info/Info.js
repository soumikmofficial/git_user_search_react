import React from "react";
import "./info.scss";
import { useGlobalContext } from "../../context";
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { GiStack } from "react-icons/gi";

function Info() {
  const { gitUser } = useGlobalContext();
  const { following, followers, public_gists, public_repos } = gitUser;
  console.log(public_repos);
  const items = [
    {
      id: 1,
      icon: <BiGitRepoForked className="icon" />,
      label: "repos",
      value: public_repos,
      color: "brown",
    },
    {
      id: 2,
      icon: <AiOutlineUsergroupAdd className="icon" />,
      label: "followers",
      value: followers,
      color: "red",
    },
    {
      id: 3,
      icon: <BiUserCheck className="icon" />,
      label: "following",
      value: following,
      color: "green",
    },
    {
      id: 4,
      icon: <GiStack className="icon" />,
      label: "gists",
      value: public_gists,
      color: "blue",
    },
  ];
  return (
    <div className="info">
      {items.map((item) => {
        return <Item key={item.id} {...item} className="item" />;
      })}
    </div>
  );
}

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <div className={`icon-container ${color}`}>{icon}</div>
      <div className="details-container">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default Info;
