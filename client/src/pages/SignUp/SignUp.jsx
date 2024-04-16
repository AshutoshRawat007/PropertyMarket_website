import React, { useState,useContext } from 'react';
import { Link ,Navigate } from 'react-router-dom';
import { UserContext } from "../../UserContext";

const SignUp = () => {
  const [Username, setUsername] = useState('');
  const [name, setname] = useState('');
  const [nameError, setnameError] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setphone] = useState('');
  const [phoneerror, setphoneer] = useState('');
  const [description, setdescription] = useState('');
  const [descerror, setdeserr] = useState('');
  const [UsernameError, setNUsernameError] = useState('');
  const [image, setImage] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  // const navigate = useNavigate();
  

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

    const formData = new FormData(); // Create a new FormData object
    formData.append('image', image);
    const userData = {
      Username,
      password,
      name,
      phone,
      description,
    };
    const jsondata=JSON.stringify(userData);
    formData.append("userData.json",jsondata );

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const response = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      body: formData,
      // headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      alert('Registration successful');
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: JSON.stringify({ Username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
      } 
    } else {
      alert('Registration failed');
    }
  };
  if (redirect) {
    return <Navigate to={'/'} />;
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-center mb-4">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])} // Capture the selected image file
              className="input-field"
            />
          </div>
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
