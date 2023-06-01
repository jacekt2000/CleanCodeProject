import React, { useState } from 'react';
import Header from '../Header';
import '../../style/register.css'


const RecoverPassword = () => {
  const [formValues] = useState({
    email: ''
  });


  return (
    <div className='container'>
      <Header />
      <div className='register'>
        <form>
          <p className='Recover'>Enter the email address associated with your Imagehub account. </p>
          <label id='login' className='registerForm'>
            <input type="text" name="login" className='registerForm' placeholder='email' />
          </label><br></br>
          <button type="submit" className='registerForm'>Continue</button>

        </form>
      </div>

    </div>
  );
};

export default RecoverPassword;