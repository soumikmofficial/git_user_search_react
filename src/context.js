import React, { useContext, useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockFollowers from "./mockData.js/mockFollowers";
import mockRepos from "./mockData.js/mockRepos";
import axios from "axios";

const AppContext = React.createContext();
const rootUrl = "http://api.github.com";

const AppProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [gitFollowers, setGitFollowers] = useState(mockFollowers);
  const [gitRepos, setGitRepos] = useState(mockRepos);
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ show: false, message: "" });

  // *the number of requests left per hour
  const getRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);

        if (remaining === 0) {
          toggleError(true, "You have exceeded your hourly limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };

  // *get the user from search
  const fetchUser = async (user) => {
    setLoading(true);
    const url = `${rootUrl}/users/${user}`;
    toggleError();
    const response = await axios.get(url).catch((err) => console.log(err));

    if (response) {
      const { login, followers_url } = response.data;
      setGitUser(response.data);

      // todo: get repos information
      axios(`${url}/repos?per_page=100`).then((res) => setGitRepos(res.data));

      // todo: get followers information
      axios(`${url}/followers`).then((res) => setGitFollowers(res.data));
    } else {
      toggleError(true, "no such user exists !");
    }
    getRequests();
    setLoading(false);
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <AppContext.Provider
      value={{
        gitUser,
        gitFollowers,
        gitRepos,
        requests,
        fetchUser,
        error,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
