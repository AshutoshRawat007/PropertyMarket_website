import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [Username, setUsername] = useState('');

  const [name , setname] = useState('');
  const [nameError , setnameError] = useState('');

  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [phoneerror, setphoneer] = useState('');
  const [description, setdescription] = useState('');
  const [descerror, setdeserr] = useState('');
  const [UsernameError, setNUsernameError] = useState('');
  
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!Username) {
      setNUsernameError('userName is required');
      return;
    }
    if (!name) {
      setnameError('Name is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
      if (!phone) {
        setphoneer('phone is required');
        return;
      }
      if (!description) {
        setdeserr('description is required');
        return;
    }

    const userData = {
      Username,
      password,
      name,
      phone,
      description,
    };
    console.log(userData);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await fetch(`${baseUrl}/register`, {
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
              placeholder="Your Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <div className="error">{UsernameError}</div>
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

          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="input-field"
            />
            <div className="error">{nameError}</div>
          </div>

          <div>
            <input
              type="number"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="input-field"
            />
            <div className="error">{phoneerror}</div>
          </div>

          <div>
            <textarea
              type="text"
              placeholder="Your description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="input-field"
            />
            <div className="error">{descerror}</div>
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
