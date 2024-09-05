/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./register.css";
import { handleError, handleSuccess } from "../toast/util";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = registerInfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }
    try {
      const url = `http://localhost:3500/users/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError("An error occurred while registering");
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 p-2 rounded-md shadow-md flex justify-center text-amber-800">
        <form className="Register" onSubmit={handleSubmit}>
          <p className="title">Registration Form</p>
          <div className="flex items-center">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={registerInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerInfo.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="text-black py-2 font-bold text-xl rounded-lg hover:bg-black hover:text-white duration-200"
          >
            Register
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
