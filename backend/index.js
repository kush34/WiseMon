import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './Config/database.js';
import userRouter from './Router/userRouter.js';
import ExpenseRouter from './Router/expenseRouter.js';
import BlogRouter from './Router/blogRouter.js'
const app = express(); 

connectDB()

//for CORS and form data 
var corsOptions = {
    origin: process.env.Frontend_URL,
    optionsSuccessStatus: 200
  };
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRouter)
app.use('/expense',ExpenseRouter)
app.use('/blog',BlogRouter)

app.get("/", (req, res) => {
  res.send("hello from backend");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});