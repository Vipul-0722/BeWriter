import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register=(req,res)=>{

    // CHECK IF USER Already exist or not
    const q="SELECT * FROM users WHERE email=? or username= ?";

    db.query(q,[req.body.email,req.body.name],(err,data)=>{


         if(err)  return res.json(err);
        
         if(data.length) return res.status(409).json("User already exist")

         // hashing the password
         const salt=bcrypt.genSaltSync(10);
         const hash=bcrypt.hashSync(req.body.password,salt);

         const q="INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        
         const values=[
            req.body.username,
            req.body.email,
            hash,
        ]

         db.query(q,[values],(err,data)=>{
            if(err)  return res.json(err);
            return res.status(200).json("User created successfully !") 
         })
        })


}

export const login=(req,res)=>{
    
    const q="SELECT * FROM users WHERE username=?";

    db.query(q,[req.body.username],(err,data)=>{
      if(err) return res.json(err);
      if(data.length===0){
        return res.status(404).json("User not found")
      }
      // user exit
      // check password
      const verifyPassword=bcrypt.compareSync(req.body.password,data[0].password);
      // return true or false
      
      if(!verifyPassword)  return res.status(400).json("Incorrect password");

      // we'll create the web token of the our users ID and we'll store it as
      // cookie in frontend and we any user tries to delete posy we'll have the cookie 
      // to let you know weathetr the posyt belong to the same user or not
     
      const {password,...other}=data[0]
       const token=jwt.sign({id:data[0].id},"jwtkey");
       
       res.cookie("access_token",token,{
        httpOnly:true
      }).status(200).json(other);
    })

}

export const logout=(req,res)=>{
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User successfully Logout")
  
}