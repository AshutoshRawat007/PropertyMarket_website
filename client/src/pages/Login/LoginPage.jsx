import React, { useState } from 'react';
import './LoginPage.css'
// import { useNavigate } from 'react-router-dom';
import {Link } from "react-router-dom";


const LoginForm = ({ changestate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const [registertion, setregistertion] = useState('false');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Simple validation
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    // TODO: Handle login logic (authentication)
    
  };

  

// const navigate = useNavigate();
const changestate2 = ()=>{  
  changestate();
  console.log("registration");
  // navigate('/');

};

  return (
    <article className="flex flex-col items-center justify-start w-[full] h-[100%] gap-[100px] overflow-auto bg-gray-50_01">
      <h2 className="tc">Welcome to the Cryptomania</h2>
      <div className="flex flex-col items-center justify-start w-full ml-[25px] gap-10">
        <form className="measure center" onSubmit={handleSubmit}>
          <legend className="f4 fw6 center">Login Page</legend>
          <div className="flex flex-col items-center justify-start w-full gap-3">
            <input
              className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error pv2 tc">{emailError}</div>
          {/* </div> */}
          {/* <div className="flex flex-col items-center justify-start w-full gap-3"> */}
            <input
              className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid" placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error pv2 tc">{passwordError}</div>
          </div>
          <div className="mv3">
            <button className="b br2 ph4 input-reset bg-transparent pointer hover-light-grey tc w-100" type="submit">Login
            {/* <Link to='/' className="link dim black db" onClick={changestate2}>Login</Link> */}
            </button>
          </div>
        </form>
        <hr className="separator_line"></hr>
        <div>
          <p className="f5 tc ">
            Don't have an account? <Link to='../signup' className="link dim black db" onClick={changestate2}>Sign Up</Link>
              {/* Sign Up</a> */}
          </p>
        </div>
      </div>
    </article>
  );
};

export default LoginForm;
