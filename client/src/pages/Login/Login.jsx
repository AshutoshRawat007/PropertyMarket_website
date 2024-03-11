import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../../UserContext";

export default function LoginPage() {
  const [Username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameerror, setnameerror] = useState('');
  // const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [redirect,setRedirect] = useState(false);
  // const [registertion, setregistertion] = useState('false');
  const {setUserInfo} = useContext(UserContext);

  const handleSubmit = async(e) => {
    
    e.preventDefault();
    // Simple validation
    if (!Username) {
      setnameerror('name is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({Username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input type="text"
                 placeholder="your@email.com"
                 value={Username}
                 onChange={ev => setEmail(ev.target.value)} 
                 />
                 <div className="error pv2 tc">{nameerror}</div>
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
                 <div className="error pv2 tc">{passwordError}</div>
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/signup'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

