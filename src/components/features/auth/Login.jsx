// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../toast/util";
import Navbar from "../../Navbar";
const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Email and password are required");
    }
    try {
      const url = `http://localhost:3500/users/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/auth");
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details || "An error occurred");
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError("An error occurred while logging in");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="Register" onSubmit={handleLogin}>
          <p className="title">Login Form</p>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
