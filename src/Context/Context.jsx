import { createContext, useEffect, useState } from "react";

export const siteContext = createContext({});

const fetchCurrentPageName = () => {
  const page = localStorage.getItem("page");
  if (!page) {
    return "Home";
  }
  return page;
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const currentPage = fetchCurrentPageName();

  const [user, setUser] = useState("John Smith");
  const [navLinks, setNavLinks] = useState([
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Log", link: "/log" },
  ]);

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  return (
    <siteContext.Provider
      value={{
        user,
        setUser,
        navLinks,
        setNavLinks,
        page,
        setPage,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
