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

  const getRequests = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        const {
          rate: { remaining },
        } = data;
        setRequests(remaining);
      })
      .catch((err) => console.log(err));
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
