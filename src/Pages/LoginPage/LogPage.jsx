import { useEffect } from "react";
import { LoginComponent } from "../../Components/LoginComponent/LoginComponent";
import { useNavigate } from "react-router-dom";
import { emailValidator } from "../../Components/LoginComponent/ValidateEmail";

export const LogPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for "user" in localStorage
    const user = localStorage.getItem("user");

    if (user) {
      // Redirect to "/profile" if "user" exists
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className="container">
      <LoginComponent />
    </div>
  );
};
