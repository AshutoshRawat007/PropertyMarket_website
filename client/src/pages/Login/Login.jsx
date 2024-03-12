import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

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

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } else {
      alert('Wrong credentials');
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Email"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              className="input-field"
            />
            <div className="error">{nameError}</div>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="input-field"
            />
            <div className="error">{passwordError}</div>
          </div>
          <button className="btn-primary" type="submit">
            Login
          </button>
          <div className="text-center text-gray-500">
            Don't have an account yet?{' '}
            <Link className="underline text-black" to={'/signup'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
