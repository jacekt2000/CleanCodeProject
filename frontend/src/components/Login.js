import React, { useState } from 'react';
import Header from './Header';
import '../style/register.css'

// zwraca promise z access oraz refresh tokenem
async function userLogin(credentials) {
  return fetch('http://127.0.0.1:8000/api/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
}

export default function Login({ setAccessToken }) {
  // const [accessToken, setAccessToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function loginValidation(credentials) {
  //   if(!credentials.email || !credentials.password){
  //     return false;
  //   }else 
  // }

  // po wcisnieciu submita uruchamia userLogin i ustawia token
  const handleSubmit = async event => {
    event.preventDefault();

    const response = await userLogin({
      email,
      password
    });
    const data = await response.json();
    // pobieram access token z jsona jako objekt js
    setAccessToken(data.access);
  }

  // console.log(acc);
  return (
    <div className='container'>
      <Header />
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" id='login' className='registerForm'>
            <input type="text" name="login" className='registerForm' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          </label><br></br>

          <label htmlFor="password" id='password' className='registerForm'>
            <input type="password" name="password" className='registerForm' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br></br>

          <div className="recoverPassword">
            {/* <Link to="/password">Forgot your password?</Link> */}
          </div>

          <button type="submit" className='registerForm'>Sign in</button>

          {/* <Link to="/Register" className="signIn">Create an account</Link> */}
        </form>

      </div>
    </div>

  );
};

