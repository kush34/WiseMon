import  express from 'express';
import { Router } from 'express';
import verifyToken from '../Middlewares/verifyToken.js';
import Post from '../Models/postModel.js';
import User from '../Models/userModel.js'
const router = express.Router();

router.post('/create',verifyToken,async (req,res)=>{
    try {
        let user = req.user;
        let {title,content,image} = req.body;
        if( !title || !content){
            res.status(403).send("incomplete Data.. Pls Try Again");
        }
        let DBuser = await User.findOne({email:user.email});
        if(!DBuser){
            res.status(404).send("User not found.. Pls Login again");
        }
        let newPost = await Post.create({
            content,
            title,
            user_id:DBuser._id
        })
        res.status(200).send("Posted");
    } catch (error) {
        res.status(401).send("error has occured....");
        
    }

})
router.get('/getPosts',verifyToken,async (req,res)=>{
    try {
        let user = req.user;
        let PostList = await Post.find({})
        // console.log(BlogList);
        res.status(200).send(PostList);
    } catch (error) {
        
    }

})

export default router;