// import { application } from 'express';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Username, setUsername] = useState('');
  // const [dob, setDob] = useState('');
  // const [gender, setGender] = useState('');
  // const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [NameError, setNameError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    if (!Username ) {
      setNameError('First name and last name are required');
      return;
    }

    const userdata={
      Username, password
    }
    console.log(userdata);
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(userdata),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  

  return (
    <article className="m-5 max-w-2xl mx-auto p-4 bg-gradient-to-b from-custom-2 to-transparent border-3 border-dark-gray shadow-2xl rounded-md">
      <h2 className="text-center">Create a New Account</h2>
      <div className="p-3 shadow-md bg-light-green rounded-md my-4">
        <form className="w-full mx-auto" onSubmit={handleSubmit}>
          <legend className="text-lg font-semibold text-center mb-4">Registration Page</legend>
          <div className="my-3 flex">
            <input
              className="appearance-none border-b-2 border-gray-700 w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              placeholder="First Name"
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <input
              className="input-reset ba b--black-20 pa2 mb2 w-50 ml3"
              placeholder="Last Name"
              type="text"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
            /> */}
          </div>
          <div className="error pv2 tc">{NameError}</div>
          <div>
            {/* <input
              className="appearance-none border-b-2 border-gray-700 w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            {/* <div className="error pv2 tc">{emailError}</div> */}
          </div>
          <div>
            <input
              className="appearance-none border-b-2 border-gray-700 w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error pv2 tc">{passwordError}</div>
          </div>

          {/* Additional fields */}
          <div>
            {/* <input
              className="appearance-none border border-black p-2 mb-2 w-full"
              placeholder="Date of Birth (YYYY-MM-DD)"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            /> */}
            {/* You can add validation for the date of birth format here */}
          </div>
          {/* <div className="flex items-center">
            <p className="mb2">Gender:</p>
            <label className="mr2">
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>
            <label className="mr2">
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                value="Others"
                checked={gender === "Others"}
                onChange={(e) => setGender(e.target.value)}
              /> Others
            </label>
          </div> */}

          <div className="mv3">
            <button className="font-bold rounded-md py-2 px-4 bg-transparent border border-black cursor-pointer hover:bg-light-gray w-full" 
            type="submit">
              Register
            </button>
          </div>
        </form>
        <hr className="separator_line"></hr>
        <div>
          <p className="text-blue-500 hover:underline block">
            Already have an account? <Link to="/" className="link dim black db">Login</Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default SignUp;
