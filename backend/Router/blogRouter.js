import  express from 'express';
import { Router } from 'express';
import verifyToken from '../Middlewares/verifyToken.js';
import Blog from '../Models/blogModel.js';

const router = express.Router();

router.post('/create',verifyToken,async (req,res)=>{
    try {
        let user = req.user;
        let {BlogContent,title,image} = req.body;
        if(!BlogContent) {
            res.status(403).send("incomplete data.. pls try again");
        }
        let newBlog = await Blog.create({
            BlogContent,
            title,
            image,
            author:user.email
        })
        res.status(200).send("Blog Posted");
    } catch (error) {
        
    }

})
router.get('/getBlogs',verifyToken,async (req,res)=>{
    try {
        let user = req.user;
        let BlogList = await Blog.find({})
        // console.log(BlogList);
        res.status(200).send(BlogList);
    } catch (error) {
        
    }

})


export default router;