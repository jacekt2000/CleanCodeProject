import React, { useState } from 'react';
import  '../../Assets/Styles/register.css';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  rep_password: string;
//  policies: boolean;
//   dateOfBirth: Date;
};


const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    username: '',
    email: '',
    password: '',
    rep_password: ''
 //   policies: false,
  });
  
  
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/registration/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.success);
        setError(null);
        console.log("git")
      } else {
        setError(data.error);
        setSuccess(null);
        console.log("nie git");
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form.');
      setSuccess(null);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  


  return (
    <div className='container'>
       <div className='logo'><a href="./login"><img style={{ height:180}} src={require('../../Assets/Images/logo3.png')} alt="" /></a></div> 

      <div className='register'>
        <form onSubmit={handleSubmit}>
          <label id='login' className='registerForm'>
            <input type="text" name="username" className='registerForm' placeholder='login' value={formData.username} onChange={handleChange} />
          </label><br></br>
          <label id='email' className='registerForm'>
            <input type="email" name="email" className='registerForm' placeholder='email' value={formData.email} onChange={handleChange}/>
          </label><br></br>
          <label id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password' value={formData.password} onChange={handleChange}/>
          </label><br></br>
          <label id='repPassword' className='registerForm'>
            <input type="password" name="rep_password" className='registerForm'  placeholder='repeat password' value={formData.rep_password} onChange={handleChange}/>
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

export default RegisterForm;