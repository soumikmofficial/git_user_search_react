import React from "react";
import { Info, Search, Navbar, Repos, User } from "../../components/components";
import "./home.scss";
import HashLoader from "react-spinners/HashLoader";
import { useGlobalContext } from "../../context";

function Home() {
  const { loading } = useGlobalContext();
  return (
    <>
      <Navbar />
      <main className="home">
        <Search />
        {loading && (
          <div className="loading">
            <HashLoader loading={loading} color="#fff" size={80} />
          </div>
        )}
        {!loading && (
          <div>
            <Info />
            <User />
            <Repos />
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
