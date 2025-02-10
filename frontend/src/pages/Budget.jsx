import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import PieChart from '../components/PieChart';
const Budget = () => {
    const navigate = useNavigate();
    const [expenseData ,setExpenseData] = useState([]);
    const [userInfo,SetUserInfo] = useState();
    const [savings,setSavings] = useState(0);
    const [spend,setSpend] = useState(0);
    const getExpenseData = async ()=>{
        let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        axios.get(`${import.meta.env.VITE_URL}/expense/getExpenseData`, 
          {headers: {
          Authorization: `Bearer ${token}`,
          }})
        .then((res)=>{
          console.log(res);
          setExpenseData(res.data)
        })
    }
    const getUserData = async ()=>{
        let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        axios.get(`${import.meta.env.VITE_URL}/user/userInfo`, 
          {headers: {
          Authorization: `Bearer ${token}`,
          }})
        .then((res)=>{
          console.log(res);
          SetUserInfo(res.data)
        })

    }
    const calculation = ()=>{
        if(!expenseData || !userInfo) return;
        let Lspend=0,Lsavings = 0,Linvestment=0;
        expenseData.map((item)=>{
            Lspend += item.amount;
        })
        setSpend(Lspend);
        Lsavings = userInfo?.salary - Lspend;
        setSavings(Lsavings);
    }
    useEffect(()=>{
        getExpenseData();
        getUserData();
    },[])
    useEffect(() => {
        calculation();
    },[expenseData])
    
  return (
    <div className='bg-zinc-300 w-full h-screen flex'>
        <div className="graph w-1/2 h-screen flex justify-center items-center ">
            <PieChart Data={expenseData}/>
        </div>
        <div className="flex flex-col justify-center items-center conclusion w-1/2 h-screen bg-white text-2xl font-medium">
            <div className="title text-4xl font-bold m-5">Your Budget</div>
            <div className="totalSalary m-5">
                Total Salary:{userInfo?.salary || "error"}
            </div>
            <div className="avgmonthlyspend m-5">
                Monthly spend:{spend}
            </div>
            <div className="avgsaving m-5">
                Monthly Savings:{savings}
            </div>
            <div className="btn m-5 ">
                <button onClick={()=>navigate('/home')} className='cursor-pointer bg-black px-5 py-2 rounded text-white'>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Budget