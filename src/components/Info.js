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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  article {
    background-color: var(--col-2);
    border-radius: 0.5rem;
    color: var(--col-1);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1rem 2rem;
    margin: 1rem;
    max-width: 180px;
    .icon-container {
      align-items: center;
      border-radius: 50%;
      display: flex;
      font-size: 2rem;
      height: 4.5rem;
      justify-content: center;
      margin: 0 auto;
      width: 4.5rem;
    }
    .details-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 3rem;
      h3 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0.7;
        text-transform: capitalize;
      }
    }
  }
`;

export default Info;
