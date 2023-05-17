import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../style/register.css';
import Validation from './validation';


const Register = () => {
  // const imageLogo = <img style={{ height:180}} src={require('../images/logo3.png')} alt="" />
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rep_password: "",
 //   policies: false,
  });
  
  const validateEmail=(email)=>{
    const EMAIL_REGEX=/^\S+@\S+\.\S+$/;
    return EMAIL_REGEX.test(email);
  };

  const validatePassword=(password)=>{
    const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
    return PWD_REGEX.test(password);
  };
  
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event ) => {
    event.preventDefault();
    setErrors(Validation(formData));
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
    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid=validatePassword(formData.password);
    if(isEmailValid && isPasswordValid){
      console.log("email i hasło są git")
    }
    else{
      console.log("soemthing not banglaing")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // ustawia zmodyfikowane wartosci w słowniku `formData`
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='container'>
      <Header/> 

      <div className='register'>
        <form onSubmit={handleSubmit}>
        <label id='login' className='registerForm'>
            <input type="text" name="username" className='registerForm' placeholder='login' value={formData.username} onChange={handleChange} />
          </label>
          {errors.username && <p>{errors.username}</p>}
          {console.log(errors)}
          <br></br>

          <label id='email' className='registerForm'>
            <input type="email" name="email" className='registerForm' placeholder='email' value={formData.email} onChange={handleChange}/>
          </label>
          <br></br>

          <label id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password' value={formData.password} onChange={handleChange}/>
          </label>
          {errors.password && <p>{errors.password}</p>}
          <br></br>

          <label id='repPassword' className='registerForm'>
            <input type="password" name="rep_password" className='registerForm'  placeholder='repeat password' value={formData.rep_password} onChange={handleChange}/>
          </label>
          {errors.rep_password && <p>{errors.rep_password}</p>}
          <br></br>

          <label className='registerForm' >
            <input type="checkbox" name="policies"/>
            I accept the <Link to="/#" className='terms'>Terms of Service</Link>
          </label><br></br>

          <button type="submit" className='registerForm'>Submit</button>
          <Link to="/login" className="signIn">Sign in</Link>
          <label className='registerForm' />
        </form>
      </div>
      
    </div>
  )
}

export default Register