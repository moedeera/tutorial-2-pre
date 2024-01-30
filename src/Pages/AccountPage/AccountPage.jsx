import { useContext, useEffect } from "react";
import "./AccountPage.css";
import { siteContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const AccountPage = () => {
  const { logState, setCurrentPage } = useContext(siteContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logState !== true) {
      alert("You are not logged in, you will be redirected to the login page");
      setCurrentPage("Login");
      navigate("/Login");
    }
  }, [logState]);

  return (
    <div className="container">
      <h3>Account Page</h3>
      <p>Welcome to the Account Page</p>
    </div>
  );
};
