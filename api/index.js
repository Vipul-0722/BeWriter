import  express, { application }  from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cors from 'cors';
import cookieParser from "cookie-parser";
import multer from "multer";

const app=express();

app.use(cors());

 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(cookieParser());

const upload = multer({ dest: './uploads/' })

app.post('/upload', upload.single('file'), function (req, res, next) {
    res.status(200).json("Image uploaded")
})
app.use("/auth",authRoutes);
app.use("/posts",postRoutes);

app.listen(3001,()=>{
    console.log("Server Started")
})
