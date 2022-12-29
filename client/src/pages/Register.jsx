import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form autoComplete='off'>
        <input type='text' placeholder='username'  autoComplete='off' ></input>
        <input type='email' placeholder='email'  autoComplete='off' ></input> 
        <input type='password' placeholder='password'  autoComplete='off' ></input>
         
        <button>Register</button>
         <p>This is error</p>
        <span>Don you have account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register