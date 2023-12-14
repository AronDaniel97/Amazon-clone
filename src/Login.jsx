import React from 'react'
import './Login.css'
import { useState } from 'react'
function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
    }
    const register = (e) => {
        e.preventDefault();
    }
  return (
    <div className="login">
      <img  className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            Notice.
          </p>
          <button onClick={register} className='login__registerButton'>create your amazon account</button>

        </form>
      </div>
    </div>
  )
}

export default Login
