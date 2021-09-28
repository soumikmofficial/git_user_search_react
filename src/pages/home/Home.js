import React from "react";
import { Info, Search, Navbar, Repos, User } from "../../components/components";
import "./home.scss";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <Search />
        <Info />
        <User />
        <Repos />
      </main>
    </>
  );
}

export default Home;
