import {db} from "../db.js";
import bcrypt from "bcryptjs";
export const register=(req,res)=>{

    // CHECK IF USER Already exist or not
     console.log(req.body.email);
     console.log(req.body.password)
     
    // const q="SELECT * FROM users WHERE email=? or username= ?";

    // db.query(q,[req.body.email,req,body.name],(err,data)=>{
    //       console.log("called")
    //      if(err)  return res.json(err);
        
    //      if(data.length) return res.status(409).json("User already exist")
        
    //         console.log("called")
    //      // hashing the password
 
    //      const salt=bcrypt.genSaltSync(10);
    //      const hash=bcrypt.hashSync(req.body.password,salt);

    //      const q="INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        
    //      console.log(hash);
    //      const values=[
    //         req.body.username,
    //         req.body.email,
    //         hash,
    //     ]

    //      db.query(q,[values],(err,data)=>{
    //         if(err)  return res.json(err);
    //         return res.status(200).json("User created successfully !") 
    //      })
    //     })


}

export const login=(req,res)=>{
    
}

export const logout=(req,res)=>{
    
}