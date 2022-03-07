import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
function Login() {
  return (
  <div className='login'>
      <Link to='/'>
      <img className='login__logo
      ' src='https://www.logolynx.com/images/logolynx/94/9461a6dc1b2adc6a04636102ee58dadd.jpeg'
      />
    </Link>
    <div className='login__container'>
        <h1>Sign in</h1>
        <form>
            <h3>E-mail</h3>
            <input class="entry" type='email'/>
            <h3>Password</h3>
            <input class="entry" type='password'/>
            
        <a href="">
        <button className="login__signInButton">Sign In</button>
        </a>
        </form>
        <p>
        By continuing, you agree to Amazon's Conditions of<br/>Use and Privacy Notice.
        </p>
        <p id="choice">Or</p>
        <a href="">
        <button className="login__registerButton">Create your Amazon account
        </button>
        </a>
    </div>

  </div>
  );
}

export default Login;
