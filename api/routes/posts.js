import  express  from "express";
import { addpost, DeletePost, UpdatePost, getAllpost, getSinglePost } from "../controllers/post.js";

const router=express.Router();

router.get("/",getAllpost);
router.get("/:id",getSinglePost);
router.post("/",addpost);
router.delete("/:id",DeletePost);
router.put("/:id",UpdatePost);

export default router;
