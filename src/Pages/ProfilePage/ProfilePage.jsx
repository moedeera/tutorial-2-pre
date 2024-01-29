import { useContext } from "react";
import { Link } from "react-router-dom";
import { siteContext } from "../../Context/Context";

export const ProfilePage = () => {
  const { logState, setLogState } = useContext(siteContext);

  return (
    <div className="container">
      <h1>Profile Page</h1>
      {logState ? <h3>You are Logged in</h3> : <h3>You are Logged out</h3>}
    </div>
  );
};
