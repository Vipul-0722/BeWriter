import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  const [inputData,setData]=useState({
    username:'',
    email:'',
    password:''
  });


  const handleChange=(e)=>{
    console.log(e.target.name);
    setData({...inputData,[e.target.name]:e.target.value})
  
  }

   



  return (
    <div className='auth'>
      <h1>Login</h1>
      <form autoComplete='off'>
        <input type='text' name="username" onChange={handleChange} placeholder='username' autoComplete='off' ></input>
         
        <input type='password' name="password" onChange={handleChange} placeholder='password'  autoComplete='off' ></input>
         
        <button>Login</button>
             <p>This is error</p>
        <span>Don't you have account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login