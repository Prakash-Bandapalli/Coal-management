/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../toast/util";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
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
          navigate("/auth", {
            state: {
              name: name,
            },
          });
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
      <div className="max-w-xl mx-auto bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 p-2  rounded-md shadow-md flex justify-center   text-amber-800">
        <form className="Register" onSubmit={handleLogin}>
          <p className="title">Login Form</p>
          <div className="flex items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-center my-3">
            Haven't registered yet?
            <span className="font-semibold text-blue-500">
              <Link to="/register">register</Link>
            </span>
          </p>

          <button
            type="submit"
            className="text-black py-2 font-bold text-xl rounded-lg hover:bg-black hover:text-white duration-200"
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
