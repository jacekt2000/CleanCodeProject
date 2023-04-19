import React, { useState } from 'react';

function Login() {
  const [accessToken, setAccessToken] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Unable to login');
      }
      setAccessToken(data.accessToken);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor= "email">Username:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      )
    
  
}

export default Login;