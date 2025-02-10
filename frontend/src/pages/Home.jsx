import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import MenuTiles from '../components/MenuTiles'
import TransactionList from '../components/TransactionList'
import MobileNavigation from '../components/MobileNavigation'
import axios from 'axios'


const Home = () => {
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
    <div className='flex flex-col md:flex-row bg-zinc-300'>
        <div className='hidden md:inline w-1/6 h-screen'>
            <Sidebar/>
        </div>
        <div className="main bg-zinc-300 w-full md:w-5/6 h-screen">
            <div className="graph h-3/6 w-full">
                <Graph expenseData={expenseData}/>
            </div>
            <div className="menu-tiles w-full">
                <MenuTiles/>
            </div>
            <div className="transaction h-2/6 w-full">
                <TransactionList expenseData ={expenseData}/>
            </div>
            <div className="absolute w-full mobilenavigation md:hidden">
                <MobileNavigation/>
            </div>
        </div>
    </div>  

  )
}

export default Home