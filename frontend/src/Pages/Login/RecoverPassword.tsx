import React, { useState } from 'react';
import  '../../Assets/Styles/register.css';



type FormValues = {
  email: string;
};


const RecoverPassword = () => {
  const [formValues] = useState<FormValues>({
    email: ''
  });


  return (
    <div className='container'>
      <div className='logo'><a href="./login"><img style={{ height:180}} src={require('../../Assets/Images/logo3.png')} alt="" /></a></div> 
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