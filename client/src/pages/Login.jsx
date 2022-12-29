import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form autoComplete='off'>
        <input type='text' placeholder='username' autoComplete='off' ></input>
         
        <input type='password' placeholder='password'  autoComplete='off' ></input>
         
        <button>Login</button>
             <p>This is error</p>
        <span>Don't you have account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login