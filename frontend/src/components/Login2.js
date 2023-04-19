import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../style/register.css'

const Login = () => {
  const [formValues, setValues] = useState({
    login: "",
    email: "",
    password: "",
    repeatPassword: "",
    policies: ""    
  });


  return (
    <div className='container'>
      <Header/>
      <div className='register'>
        <form>
          <label id='login' className='registerForm'>
            <input type="text" name="login" className='registerForm' placeholder='login/email' />
          </label><br></br>

          <label id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password'/>
          </label><br></br>

          <div className="recoverPassword">
            <Link to="/password">Forgot your password?</Link>
            </div>

          <button type="submit" className='registerForm'>Sign in</button>

          <Link to="/Register" className="signIn">Create an account</Link>
        </form>
      </div>
      
    </div>
  );
};

export default Login;