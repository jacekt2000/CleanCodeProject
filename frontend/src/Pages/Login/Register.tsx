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


const RegistrationForm = () => {
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
            <input type="text" name="login" className='registerForm' placeholder='login' />
          </label><br></br>
          <label id='email' className='registerForm'>
            <input type="email" name="email" className='registerForm' placeholder='email'/>
          </label><br></br>
          <label id='name' className='registerForm'>
            <input type="text" name="name" className='registerForm' placeholder='name'/>
          </label><br></br>
          <label id='surname' className='registerForm'>
            <input type="text" name="surname" className='registerForm' placeholder='surname'/>
          </label><br></br>
          <label id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password'/>
          </label><br></br>
          <label id='repPassword' className='registerForm'>
            <input type="password" name="repeatPassword" className='registerForm'  placeholder='repeat password'/>
          </label><br></br>
          <label className='registerForm' >
            <input type="checkbox" name="policies"/>
            I accept the <a href="" className='terms'>Terms of Service</a>
          </label><br></br>
          <button type="submit" className='registerForm'>Submit</button>
          <a href="./login" className="signIn">Sign in</a> 
        </form>
      </div>
      
    </div>
  );
};

export default RegistrationForm;