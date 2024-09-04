import React from 'react';
import './register.css'; 

function Register() {
  return (
    <div className="container">

      <form className="Register">
      <p className="title">Registration Form</p>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;