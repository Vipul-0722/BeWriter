import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';
const Login = () => {

  const Navigate=useNavigate();
  const [inputData,setData]=useState({
    username:'',
    password:''
  });

  const [error,setError]=useState(null);

  const handleChange=(e)=>{
    console.log(e.target.name);
    setData({...inputData,[e.target.name]:e.target.value})
  
  }

  const {login}=useContext(AuthContext);
  const {currentUser}=useContext(AuthContext);
  
  console.log(currentUser)

  const submitHandle=async (e)=>{
    e.preventDefault()
    console.log(inputData)
    console.log("called");
    try{
      await login(inputData);
       Navigate("/");
      }
    catch(err){
      console.log(err)
        setError(err)
    }   
   } 

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form autoComplete='off'>
        <input type='text' name="username" onChange={handleChange} placeholder='username' autoComplete='off' ></input>
         
        <input type='password' name="password" onChange={handleChange} placeholder='password'  autoComplete='off' ></input>
         
        <button onClick={submitHandle}>Login</button>
        { error && <p>{error}</p>}
        <span>Don't you have account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login