import express from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import 'dotenv/config';
import verifyToken from '../Middlewares/verifyToken.js';
const router = express.Router();

router.post("/register", async (req, res) => {
    try{
        const {name,email,password} = req.body;
        let user = await User.findOne({email});
        if(user){
            res.send("user already exists");
        }
        else{
            bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt,async  (err, hash) => {
                if (err) throw err;
                //creates user in database with encrypted password
                const user  = await User.create({
                name,
                email,
                password:hash,
                })
                // console.log(user)
            });
            });
          res.status(200).send("user created");
        }
    }
    catch(err){
        console.log(err.message);
    }     
});

router.post('/login',async (req,res)=>{
    try{

        let {email,password}=req.body;
        if(!email || !password){
            return res.send("pls enter valid input")
        }
        let user = await User.findOne({email});
        if(!user){
            return res.send("something went wrong...")
        }
        bcrypt.compare(password, user.password, async (err, result) => {
            if (err) throw err;
            // console.log(result);
            if(!result){
                res.send("something went wrong")
            }else{
                const Token = await JWT.sign({ email },process.env.JWT_SECRECT);
                res.json({Token});
            }
        });
        // console.log(user);
    }
    catch(err){
        console.log(err.message)
    }
})

router.get('/userInfo',verifyToken,async(req,res)=>{
    try{
        let user = req.user;
        // console.log(user);
        let DBuser = await User.findOne({email:user.email});
        if(!DBuser) res.status(404).send("something went wrong...")  
        else{
            DBuser.password= '';
          res.status(200).send(DBuser)
        }
    }
    catch(err){
        console.log(err.message);
    }

})
export default router