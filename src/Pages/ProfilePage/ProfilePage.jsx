import { useContext } from "react";

import { SiteContext } from "../../Context/Context";

export const ProfilePage = () => {
  const { logState } = useContext(SiteContext);

  return (
    <div className="container">
      <h1>Profile Page</h1>
      <p>
        This page is a non-redirectable page. You will stay on regardless of if
        you are logged in or not.{" "}
      </p>{" "}
      <p>The information displayed however, will change</p>
      {logState ? <h3>You are Logged in</h3> : <h3>You are Logged out</h3>}
    </div>
  );
};
