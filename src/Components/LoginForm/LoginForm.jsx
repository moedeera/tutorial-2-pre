import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { emailValidator } from "./ValidateEmail.jsX";
export const LoginForm = () => {
  const [showPasssword, setShowPassword] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [emailError, setEmailError] = useState(false);

  const changeInfo = (type, e) => {
    if (type === "email") {
      setEmail(e.target.value);
      return;
    } else if (type === "password") {
      setPassowrd(e.target.value);
      return;
    }
  };

  const handleSubmit = async () => {
    let valid = emailValidator(email);

    if (!valid) {
      console.log("invalid email");
      setEmailError(true);
      return;
    }

    setUserInfo({ ...userInfo, email: email, password: password });
    setEmailError(false);
    console.log(userInfo);
  };
  // https://uidesigndaily.com/posts/photoshop-login-log-in-authentication-mobile-day-395
  // https://uidesigndaily.com/posts/sketch-login-log-in-authentication-mobile-day-565
  return (
    <div className="login-form">
      <div className="form-container">
        <div className="form-header">
          <h3>Login Form</h3>
        </div>
        <div className="form-section">
          <label htmlFor="">Email</label>
          <div className="form-text-input-container">
            <input
              className="login-form-input "
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => {
                changeInfo("email", e);
              }}
            />
          </div>
        </div>
        <div className="form-section">
          {emailError && (
            <small className="form-error"> Please enter a valid email</small>
          )}
        </div>

        <div className="form-section">
          <label htmlFor="password">Password</label>
          <div className="form-text-input-container">
            <input
              className="login-form-input "
              type={showPasssword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                changeInfo("password", e);
              }}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-input-container">
            <input
              type="checkbox"
              onChange={() => {
                setShowPassword(!showPasssword);
              }}
            />
            <div className="form-forgot">
              {" "}
              <small>Show passsword</small>
            </div>
          </div>
        </div>

        <div className="form-section">
          {" "}
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="form-btn"
          >
            Login
          </button>
        </div>
        <div className="form-section">
          <button className="form-btn alt">Sign up</button>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};
