import { useContext, useEffect } from "react";
import "./ReDirectPage.css";
import { SiteContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export const ReDirectPage = () => {
  const { logState, setCurrentPage } = useContext(SiteContext);
  const navigate = useNavigate();
  console.log(logState);
  useEffect(() => {
    if (logState) {
      setCurrentPage("account");
      navigate("/account");
    }
  }, []);
  return (
    <div className="container">
      <h2>
        You have been redirected to this page from the {`"/account"`} route
      </h2>
      <h3>
        When you try to access the {`"/account"`} route without being logged in,
        you{" "}
      </h3>
    </div>
  );
};
