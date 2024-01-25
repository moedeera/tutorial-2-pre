import { useContext, useEffect, useState } from "react";
import { siteContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [log, setLog] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLog(true);
    }
  }, []);
  const { navLinks, setPage, page } = useContext(siteContext);
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
