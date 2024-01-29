import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const siteContext = createContext({});

const fetchUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return user;
};
const fetchLogState = () => {
  const logState = localStorage.getItem("log-state");
  if (!logState || logState === null || logState === undefined) {
    return false;
  }
  return logState;
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedUser = fetchUser();
  const fetchedLogState = fetchLogState();

  const [user, setUser] = useState(fetchedUser);
  const [logState, setLogState] = useState(fetchedLogState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("log-state", JSON.stringify(logState));
  }, [logState]);

  return (
    <siteContext.Provider
      value={{
        user,
        setUser,
        logState,
        setLogState,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
