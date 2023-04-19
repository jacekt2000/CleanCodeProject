import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../style/register.css'

var acc="";
function Login() {
  const [accessToken, setAccessToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  async function handleLogin(e) {
    e.preventDefault();
    //setError(Validation(values));
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
        throw new Error(data.message || 'DING DONG SOMETHING IS WRONG!!!!!!!!!!!!!!!!!!!!!!');
      }
      setAccessToken(data.accessToken);
      acc+="Zalogowano. Twój access token to: ";
      acc+=data.access;
      // console.log(acc);
    } catch (error) {
      alert(error.message);
    }
    
  }
  console.log(acc);
  return (
    <div className='container'>
      <Header/>
      <div className='register'>
        <form onSubmit={handleLogin}>
          <label htmlFor= "email" id='login' className='registerForm'>
            <input type="text" name="login" className='registerForm' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
          </label><br></br>

          <label htmlFor="password" id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <br></br>

          <div className="recoverPassword">
            <Link to="/password">Forgot your password?</Link>
            </div>

          <button type="submit" className='registerForm'>Sign in</button>

          <Link to="/Register" className="signIn">Create an account</Link>
        </form>
        
      </div>
      <div><p>{acc}</p></div>
    </div>
    
  );
};

export default Login;