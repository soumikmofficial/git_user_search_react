import React from "react";
import { Info, Search, Navbar, Repos, User } from "../../components/components";
import "./home.scss";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
}

export default Home;
