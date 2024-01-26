import { useContext, useEffect, useState } from "react";
import "./AccountPage.css";
import { siteContext } from "../../Context/Context";

export const AccountPage = () => {
  const { user, setUser } = useContext(siteContext);

  const [logState, setLogState] = useState(false);

  useEffect(() => {
    if (user && user !== null) {
      setLogState(true);
    }
  }, []);

  return (
    <div className="container">
      <h3>Profile Page</h3>
      {logState ? "You are logged in" : "You are logged out"}
    </div>
  );
};
