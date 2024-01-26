import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [log, setLog] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLog(true);
    }
  }, []);

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/">Profile</Link>
      {log ? (
        <div
          onClick={() => {
            localStorage.removeItem("user");
            setLog(false);
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
