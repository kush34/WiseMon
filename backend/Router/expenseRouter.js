import express from 'express';
import User from '../Models/userModel.js';
import verifyToken from '../Middlewares/verifyToken.js'
import 'dotenv/config';
import Expense from '../Models/expenseModel.js';
const router = express.Router();


router.post("/create",verifyToken, async (req, res) => {
    try{
        let user = req.user;
        // console.log(user);
        let DBuser = await User.findOne({email:user.email})
        if(!DBuser) res.status(404).send("user not found");
        // console.log(DBuser.id);
        let{description,amount,category}=req.body;
        let expense = await Expense.create({
            description,
            amount,
            category,
            user_id:DBuser.id
        })
        // console.log(expense);
        res.status(200).send("expense created");
    }
    catch(err){
        console.log(err.message);
    }
});


// router.post("/updateExpenseData/:id",verifyToken,async (req, res) => {
//     try{
//         let data  = req.body.expenseData;
//         if(!data){
//           res.status(401).send("data not found ....")
//         }
//         let DBexpense = await Expense.findOneAndUpdate({_id:data._id},{
//           description:data.description,
//           amount:data.amount,
//           category:data.category
//         })

//         res.status(200).send("Updated the DB");
//     }
//     catch(err){
//         console.log(err);
//     }
// });


//sends expense data of particular user >>
router.get('/getExpenseData',verifyToken,async (req,res)=>{
    try{
      let user = req.user;
      if(user){
          const DBuser = await User.findOne({email:user.email})
          if(DBuser){
              // console.log(DBuser);
              const list = await Expense.find({user_id:DBuser._id})
              // console.log(list);
              if(list) res.status(200).send(list);
          }
      }
      else{
          res.status(404).send("No user found...")
      }
    }
    catch(err){
        console.log(err);
    }
  
})

export default router