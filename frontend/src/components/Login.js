import React, { useState } from 'react';

function Login() {
  const [accessToken, setAccessToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
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
    <>
      {accessToken ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="email"
              value={username}
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
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
}

export default Login;