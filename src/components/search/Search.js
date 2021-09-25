import React from "react";
import { useGlobalContext } from "../../context";
import "./search.scss";

function Search() {
  const [user, setUser] = React.useState("");
  const { requests } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="search">
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search git user"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="fetch-count">
        <h2>{requests} / 60</h2>
      </section>
    </div>
  );
}

export default Search;
