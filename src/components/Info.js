import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
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
    <div className="section-container">
      <Wrapper>
        {items.map((item) => {
          return <Item key={item.id} {...item} className="item" />;
        })}
      </Wrapper>
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

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  font-size: 2rem;
  article {
    background-color: var(--col-2);
    border-radius: 0.5rem;
    color: var(--col-1);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1rem 2rem;
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
    }
    .details-container {
      padding-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        /* margin-top: 0.3rem; */
        text-transform: capitalize;
        font-size: 1.5rem;
        opacity: 0.7;
        font-weight: bold;
      }
    }
  }
`;

export default Info;
