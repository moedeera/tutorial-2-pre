import { createContext, useEffect, useState } from "react";

export const siteContext = createContext({});

const fetchCurrentPageName = () => {
  const page = localStorage.getItem("page");
  if (!page) {
    return "Home";
  }
  return page;
};

const fetchGlobalCount = () => {
  let globalCount = localStorage.getItem("globalCount");
  if (!globalCount) {
    return parseInt(1, 10);
  }
  return parseInt(globalCount, 10);
};

export const SiteContextProvider = ({ children }) => {
  const currentPage = fetchCurrentPageName();
  const globalCount = fetchGlobalCount();

  const [user, setUser] = useState("John Smith");
  const [navLinks, setNavLinks] = useState([
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Log", link: "/log" },
  ]);

  const [count, setCount] = useState(globalCount);
  const [page, setPage] = useState(currentPage);
  const [countNoStorage, setCountNoStorage] = useState(1);

  useEffect(() => {
    localStorage.setItem("globalCount", count.toString());
  }, [count]);

  return (
    <siteContext.Provider
      value={{
        user,
        setUser,
        navLinks,
        setNavLinks,
        count,
        setCount,
        page,
        setPage,
        countNoStorage,
        setCountNoStorage,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
