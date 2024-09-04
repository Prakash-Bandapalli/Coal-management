import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import the CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Simple validation: check if username and password are provided
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Clear error message
    setError('');

    // Navigate to the Welcome page, passing the username as state
    navigate('/welcome', { state: { username } });

    // Clear input fields after successful login
    setUsername('');
    setPassword('');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className='error-message'>{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
