import React, { useState } from 'react';
import  '../../Assets/Styles/register.css';




type FormValues = {
  login: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
  policies: boolean;
//   dateOfBirth: Date;
};


const LoginForm = () => {
  const [formValues] = useState<FormValues>({
    login: '',
    email: '',
    name: '',
    surname: '',
    password: '',
    repeatPassword: '',
    policies: false
    
  });


  return (
    <div className='container'>
      <div className='logo'><a href="./login"><img style={{ height:180}} src={require('../../Assets/Images/logo3.png')} alt="" /></a></div> 
      <div className='register'>
        <form>
          <label id='login' className='registerForm'>
            <input type="text" name="login" className='registerForm' placeholder='login/email' />
          </label><br></br>
          <label id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password'/>
          </label><br></br>
          <div className="recoverPassword"><a href="./password">Forgot your password?</a></div>
          <button type="submit" className='registerForm'>Sign in</button>
          <a href="./Register" className="signIn">Create an account</a>
        </form>
      </div>
      
    </div>
  );
};

export default LoginForm;