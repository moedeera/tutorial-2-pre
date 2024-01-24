import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProfilePage = () => {
  const [log, setLog] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLog(true);
    }
  }, []);

  return (
    <div className="container">
      <h3>Profile Page</h3>
      {log ? (
        <div
          className="form-btn btn-logout"
          onClick={() => {
            localStorage.removeItem("user");
          }}
        >
          Logout
        </div>
      ) : (
        <Link className="form-btn btn-logout" to={"/"}>
          Login
        </Link>
      )}
    </div>
  );
};
