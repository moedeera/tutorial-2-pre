import { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";

export const Navbar = () => {
  const { user, setUser, logState, setLogState } = useContext(siteContext);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user !== null) {
      setLogState(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/account">Account</Link>
      {logState ? (
        <button
          className="btn"
          onClick={() => {
            localStorage.removeItem("user");
            setLogState(false);
            setUser(false);
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/log">Login</Link>
      )}
    </div>
  );
};
