import React, { useState } from 'react'
import BackBtn from '../components/BackBtn'
import { Search } from 'lucide-react';
import axios from 'axios';

const Investment = () => {
  const [stockList,setStockList] = useState([]);
  const [symbol,setSymbol] = useState();
  
  const validate =  ()=>{
    if(symbol == "" || "") return false;
    return true;
  }

  const handleSubmit = async ()=>{
    let res = validate();
    if(res){
      getStockInfo();
    }
  }
  const getStockInfo = async ()=>{
    console.log("func fired1");
    let token = JSON.parse(localStorage.getItem("Token"));
    if(!token){
        navigate('/')
    }
    axios.post(`${import.meta.env.VITE_URL}/user/getStock`,{
      symbol
    }, 
      {headers: {
      Authorization: `Bearer ${token}`,
      }})
    .then((res)=>{
      console.log(res.data);
      setStockList([...stockList,res.data]);
    })
}
  return (
    <div>
      <div className="title text-2xl font-medium p-5">
        Investment
      </div>
      <div className="searchedList p-5 h-[40vh] overflow-x-scroll flex flex-col gap-5 justify-center items-center w-full">
        {stockList && stockList.map((stock)=>{
          return (
          <div className = 'text-xl w-1/3 bg-zinc-200 rounded px-5 py-2'>
            <div>
              Company Name : {stock?.name}
            </div>
            <div>
              Current Price: {stock?.price}
            </div>
            <div className={`${stock.change<0 ? "text-red-600" : "text-green-500"}`}>
              Change : {stock?.change}
            </div>
          </div>
          )
        })
        }
      </div>
      <div className='w-full h-[30vh] flex flex-col justify-center items-center'>
          <div className="title font-medium md:text-2xl m-5">
            Find Opportunities that secures your future 🔥
          </div>
          <div className='w-full flex items-center justify-center gap-5'>
            <input onChange={(e)=>setSymbol(e.target.value)}  className='w-1/2 bg-zinc-200 outline-none  rounded-xl px-5 py-2' placeholder='seach for stocks' type="text" name="" id="" />
            <button onClick={handleSubmit} className='bg-black hover:text-black border hover:bg-white hover:scale-105 duration-150 ease-in px-5 py-2 rounded text-zinc-100'> <Search /></button>
          </div>
      </div>
      
      <div className="backbtn p-5">
        <BackBtn/>
      </div>
    </div>
  ) 
}

export default Investment
