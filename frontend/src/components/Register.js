import React from 'react'
import { Link } from 'react-router-dom';
import '../style/register.css';

const Register = () => {
  const imageLogo = <img style={{ height:180}} src={require('../images/logo3.png')} alt="" />

  return (
    <div className='container'>
      <div className='logo'><Link to="/login">{imageLogo}</Link></div> 

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
            I accept the <Link to="/#" className='terms'>Terms of Service</Link>
          </label><br></br>

          <button type="submit" className='registerForm'>Submit</button>
          <Link to="/login" className="signIn">Sign in</Link> 
        </form>
      </div>
      
    </div>
  )
}

export default Register