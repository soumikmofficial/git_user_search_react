import React from "react";
import { useGlobalContext } from "../../context";
import "./search.scss";

function Search() {
  const [user, setUser] = React.useState("");
  const { requests, fetchUser, error, loading } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(user);
  };
  return (
    <>
      {error.show && <div className="error">{error.message}</div>}
      <div className="search">
        <section className="search-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search git user"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
            {requests > 0 && !loading && <button type="submit">Search</button>}
          </form>
        </section>
        <section className="fetch-count">
          <h2>{requests} / 60</h2>
        </section>
      </div>
    </>
  );
}

export default Search;
