import { createContext, useEffect, useState } from "react";
import { sometimesReturnValue } from "./FetchFunction/FetchFunction";
// Naming the context with PascalCase
export const SiteContext = createContext({});

const fetchUser = () => {
  // Parsing the user object from localStorage
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

const fetchLogState = () => {
  // Explicitly converting logState to a boolean
  const logState = localStorage.getItem("log-state");
  return logState === "true";
};

const fetchCurrentPage = () => {
  try {
    let data = localStorage.getItem("current-page");
    return JSON.parse(data) || "Home";
  } catch (error) {
    console.error("Error parsing current page from localStorage:", error);
    return "Home";
  }
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedUser = fetchUser();
  const fetchedLogState = fetchLogState();
  const fetchedCurrentPage = fetchCurrentPage();

  const [user, setUser] = useState(fetchedUser);
  const [logState, setLogState] = useState(fetchedLogState);
  const [currentPage, setCurrentPage] = useState(fetchedCurrentPage);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("log-state", logState.toString());
  }, [logState]);

  useEffect(() => {
    localStorage.setItem("current-page", JSON.stringify(currentPage));
  }, [currentPage]);

  return (
    <SiteContext.Provider
      value={{
        user,
        setUser,
        logState,
        setLogState,
        currentPage,
        setCurrentPage,
        sometimesReturnValue,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
