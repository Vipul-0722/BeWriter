import { createContext,useEffect,useState } from "react";
import axios from "axios"

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState(
        // converting string to object
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login=async(inputs)=>{
       const res=await axios.post("http://localhost:3001/auth/login",inputs);
       setCurrentUser(res.data);  
       console.log(res);
    } 
    const logout=async(inputs)=>{
     const res= await axios.post("http://localhost:3001/auth/logout");
     console.log(res);  
     setCurrentUser(null);  
    }

    useEffect(()=>{
    // convert object to string
    localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    
    return (
        <AuthContext.Provider value={{login,logout,currentUser}} >
          {children}
        </AuthContext.Provider>
    )
}