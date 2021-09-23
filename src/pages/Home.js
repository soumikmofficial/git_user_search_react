import React from "react";
import { Info, Search, Navbar, Repos, User } from "../components/components";

function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  );
}

export default Home;
