import React, { useState } from "react";
import Input from "./input";

const Login = ({ placeholder }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setError("")
    setIsLoggedIn((prevState) => !prevState);
    return;
  };

  return (
    <div className="login-page">
        <h1>Login</h1>
        <div className="form-group">
            <Input 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <Input 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> 
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;