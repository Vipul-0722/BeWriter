import React, { useContext, useEffect, useState } from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu.jsx'
import axios from 'axios'  
import moment from "moment"
import { AuthContext } from '../context/authContext'

const Single = () => {

const {currentUser}=useContext(AuthContext);

 const [post,setPost]=useState({}); 

 const location=useLocation()

 const postId=location.pathname.split("/")[2];

const navigate=useNavigate();

useEffect(()=>{
  const fetchData= async()=>{
      try{
         const res=await axios.get(`http://localhost:3001/posts/${postId}`)     
         console.log(res);
         setPost(res.data)
        }catch(err){
        console.log(err)
      }
  }
  fetchData();
},[postId])

const deleteHandler=async(e)=>{
      const {access_token}= currentUser;
      console.log(access_token);
       try{
         await axios.delete(`http://localhost:3001/posts/${postId}`,
          {
            data:{
              access_token:access_token
            }
          });
         navigate("/")     
        }catch(err){
        console.log(err)
      }
   
}

  return (
    <div className='single'>
      <div className='content'>
          <img src={post?.img} alt='profile'></img>
          <div className='user'>
              {post?.userImg &&  <img src={post?.userImg} alt='profile'></img>}
            <div className='info'>
                <span>Vipul Gaikwad</span>
                <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser.username===post.username &&
            <div className='edit'>
               <Link to={`/write?edit=2`}>
                 <img src={Edit} alt='edit'></img>
              </Link>
                 <img src={Delete} onClick={deleteHandler} alt='edit'></img>
             </div>    
            }
            </div>
         <h1>{post.title}</h1>   
          <p>{post.desc}</p> </div>
       <Menu cat={post.category}/>
    </div>
  )
}

export default Single