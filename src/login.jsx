import React, { useState } from "react";
import Input from "./input";

const Login = ({ placeholder, onLoginSuccess }) => {

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
    onLoginSuccess();
    return;
  };

  return (
    <div className="loginPage">
        <h1>Login</h1>
        <div className="formGroup">
            <Input 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="formGroup">
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