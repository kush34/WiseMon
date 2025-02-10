import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn'
import TransactionCard from '../components/TransactionCard'
import axios from 'axios';
const Transaction = () => {
    const [expenseData ,setExpenseData] = useState([]);
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
    useEffect(()=>{
        getExpenseData();
    },[])
  return (
    <div className='bg-zinc-300 h-screen'>
        <div className="title text-3xl font-medium p-5">
            Transaction
        </div>
        <div className="transaction-list flex flex-col gap-3 p-4 m-5 rounded h-4/6 bg-white overflow-y-scroll no-scrollbar">
            {expenseData.map((item)=>{
                return(
                    <TransactionCard props={item}/>
                )
            })}

        </div>
        <div className='flex justify-end p-5'>
            <BackBtn/>
        </div>
    </div>
  )
}

export default Transaction