import express from 'express';
import User from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import 'dotenv/config';
import verifyToken from '../Middlewares/verifyToken.js';
import yahooFinance from "yahoo-finance2";
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
                console.log(user)
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
            // if (err) throw err;
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

router.post("/updateUserInfo",verifyToken, async (req,res)=>{
    try{
        let user = req.user;
        let {newSalary} = req.body;
        let DBuser = await User.findOneAndUpdate({email:user.email},{salary:newSalary},{new:true});
        if(!DBuser){
            res.status(404).send("something went wrong!... pls try again...");
        }else{
            console.log(DBuser);
            res.status(200).send("userDetails update!")
        }
    }
    catch(err){
        console.log(err.message);
    }
})

router.post("/getStock",verifyToken, async (req,res)=>{
    try {
        let {symbol} = req.body;
        const result = await yahooFinance.quote(symbol); 
        res.json({
          symbol,
          name: result.shortName,
          price: result.regularMarketPrice,
          change: result.regularMarketChange,
          changePercent: result.regularMarketChangePercent,
          currency: result.currency,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch stock data" });
      }
})

router.post("/getStockInfo",verifyToken, async (req,res)=>{
    try {
        const symbol = req.body.symbol.toUpperCase();
        const queryOptions = { period1: "2024-01-01", interval: "1d" }; // Year-to-date daily data
        const result = await yahooFinance.historical(symbol, queryOptions);
        
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch stock data" });
      }
})

router.post("/getStockParams",verifyToken, async (req,res)=>{
    try {
        const symbol = req.body.symbol.toUpperCase();
        const result = await yahooFinance.quoteSummary(symbol, { modules: ["summaryDetail", "financialData"] });
    
        const metrics = {
          peRatio: result.summaryDetail.trailingPE, // P/E Ratio
          marketCap: result.summaryDetail.marketCap, // Market Capitalization
          dividendYield: result.summaryDetail.dividendYield, // Dividend Yield
          previousClose: result.summaryDetail.previousClose, // Previous Closing Price
          fiftyTwoWeekHigh: result.summaryDetail.fiftyTwoWeekHigh, // 52-Week High
          fiftyTwoWeekLow: result.summaryDetail.fiftyTwoWeekLow, // 52-Week Low
          profitMargins: result.financialData.profitMargins, // Profit Margins
          returnOnEquity: result.financialData.returnOnEquity, // ROE (Return on Equity)
        };
    
        res.json(metrics);
      } catch (error) {
        console.error("Error fetching stock metrics:", error);
      }
})

router.post("/getStockNews",verifyToken, async (req,res)=>{
    try {
        const symbol = req.body.symbol;
        const result = await yahooFinance.search(symbol);
        res.json(result);
    } catch (error) {
    console.error("Error fetching stock news:", error);
    }
})

router.get("/news", async (req, res) => {
    const topic = req.query.topic || "stock market";
    const API_KEY = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch news" });
    }
  });
export default router;