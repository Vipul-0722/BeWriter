import {db} from "../db.js"
export const getAllpost=(req,res)=>{
     res.json('Post response from controller')
     const cat=req.query.cat 
               ? "SELECT *FROM posts WHERE cat=?"
               : "SELECT *FROM posts";
    db.query(q,[req.query.cat],(err,data)=>{
       if(err)  return res.send(err);

       return res.status(200).json(data);
    })
}

export const getSinglePost=(req,res)=>{
     res.json('Post response from controller')
}

export const addpost=(req,res)=>{
     res.json('Post response from controller')
}

export const UpdatePost=(req,res)=>{
     res.json('Post response from controller')
}

export const DeletePost=(req,res)=>{
     res.json('Post response from controller')
}