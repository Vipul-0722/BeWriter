import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {

const [inputData,setData]=useState({
    username:'',
    email:'',
    password:''
  });

  const handleChange=(e)=>{
    setData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
 


  const submitHandle=async (e)=>{
    e.preventDefault();

    try{
       const res=await axios.post("http://localhost:3001/auth/register",inputData)
       console.log(res);
      }
    catch(err){
      console.log(err)
    }   
   }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form autoComplete='off'>
        <input type='text' placeholder='username' name="username" onChange={handleChange} autoComplete='off' ></input>
        <input type='email' placeholder='email' name="email" onChange={handleChange} autoComplete='off' ></input> 
        <input type='password' placeholder='password' name="password" onChange={handleChange} autoComplete='off' ></input>
         
        <button onClick={submitHandle}>Register</button>
         <p>This is  error</p>
        <span>Don you have account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register