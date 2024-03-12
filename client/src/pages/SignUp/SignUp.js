import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!username) {
      setNameError('Name is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    const userData = {
      username,
      password,
    };

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-center mb-4">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <div className="error">{nameError}</div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <div className="error">{passwordError}</div>
          </div>
          <button className="btn-primary" type="submit">
            Register
          </button>
          <div className="text-center text-gray-500">
            Already have an account?{' '}
            <Link className="underline text-black" to={'/'}>
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
