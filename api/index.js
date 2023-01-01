import  express, { application }  from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"


const app=express();

app.use(express.json());

app.use("/auth",authRoutes)

app.listen(5000,()=>{
    console.log("Server Started")
})
