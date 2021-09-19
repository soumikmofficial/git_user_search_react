import React, { useContext, useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockFollowers from "./mockData.js/mockFollowers";
import mockRepos from "./mockData.js/mockRepos";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [gitFollowers, setGitFollowers] = useState(mockFollowers);
  const [gitRepos, setGitRepos] = useState(mockRepos);
  return (
    <AppContext.Provider
      value={{
        gitUser,
        gitFollowers,
        gitRepos,
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
