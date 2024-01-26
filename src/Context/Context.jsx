import { createContext, useEffect, useState } from "react";

export const siteContext = createContext({});

const fetchUser = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return user;
};

// eslint-disable-next-line react/prop-types
export const SiteContextProvider = ({ children }) => {
  const fetchedUser = fetchUser();

  const [user, setUser] = useState(fetchedUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <siteContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
