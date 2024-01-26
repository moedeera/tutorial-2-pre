import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";

export const Navbar = () => {
  const { user, setUser } = useContext(siteContext);
  const [log, setLog] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user !== null) {
      setLog(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/account">Account</Link>
      {user ? (
        <div
          onClick={() => {
            localStorage.removeItem("user");
            setLog(false);
            setUser(false);
          }}
        >
          Logout
        </div>
      ) : (
        <Link to="/log">Login</Link>
      )}
    </div>
  );
};
