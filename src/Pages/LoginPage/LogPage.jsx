import { useContext, useEffect } from "react";
import { LoginComponent } from "../../Components/LoginComponent/LoginComponent";
import { useNavigate } from "react-router-dom";
import { siteContext } from "../../Context/Context";

export const LogPage = () => {
  const navigate = useNavigate();

  const { logState } = useContext(siteContext);

  useEffect(() => {
    // Check for "user" in localStorage

    if (logState) {
      // Redirect to "/profile" if "user" exists
      navigate("/profile");
      return;
    }
  }, [navigate, logState]);

  return (
    <div className="container">
      <LoginComponent />
    </div>
  );
};
