import {db} from "../db.js"
import jwt from "jsonwebtoken"
export const getAllpost=(req,res)=>{
     const q=req.query.cat 
               ? "SELECT *FROM posts WHERE category=?"
               : "SELECT *FROM posts";

    db.query(q,[req.query.cat],(err,data)=>{

       if(err) return res.status(500).json(err);

       return res.status(200).json(data);
    })   
}

export const getSinglePost=(req,res)=>{


    const q= "SELECT p.id, `username`, `title`, `desc`, p.img, u.image AS userImg, `category`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

    db.query(q,[req.params.id],(err,data)=>{

       if(err)  return res.status(500).json(err);

       return res.status(200).json(data[0]);
    })  
     
}

export const addpost=(req,res)=>{
     res.json('Post response from controller')
}

export const UpdatePost=(req,res)=>{
     res.json('Post response from controller')
}

export const DeletePost=(req,res)=>{
 
    const token=req.body.access_token;
    if(!token) return res.status(200).json("Not authenticated")
   
     //userinfo is, in login we send userId in jwt.sign()
     jwt.verify(token,"jwtkey",(err,userinfo)=>{
     if(err) return res.status(500).json("Token is not valid")
  
     console.log(userinfo);
     const postId=req.params.id  ; 
     console.log(postId);

     const q="DELETE FROM posts WHERE `id`= ? AND `uid`= ?"
     
     //  userinfo===jwt.sign({id:data[0].id},"jwtkey");

     db.query(q,[postId,userinfo.id],(err,data)=>{
           if(err) return res.status(500).json("You can only delete your posts");     
          return res.status(200).json("Post has been successfully deleted");  
          })
   })

     
}