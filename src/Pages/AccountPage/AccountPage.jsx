import { useContext, useEffect } from "react";
import "./AccountPage.css";
import { SiteContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const { logState, setCurrentPage } = useContext(SiteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logState !== true) {
      setCurrentPage("redirect");
      navigate("/redirect");
    }
  }, [logState]);

  return (
    <div className="container">
      <h3>Account Page</h3>
      <p>Welcome to the Account Page</p>
      <p>
        This page is a redirectable page. You will stay on only if you are
        logged in.{" "}
      </p>{" "}
    </div>
  );
};
