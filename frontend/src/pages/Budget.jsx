import React from 'react'
import { useNavigate } from 'react-router-dom'
const Budget = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-zinc-300 w-full h-screen flex'>
        <div className="graph w-1/2 h-screen">
            
        </div>
        <div className="flex flex-col justify-center items-center conclusion w-1/2 h-screen bg-white text-2xl font-medium">
            <div className="title text-4xl font-bold">Your Budget</div>
            <div className="totalSalary m-5">
                Total Salary
            </div>
            <div className="avgmonthlyspend m-5">
                Avg Monthly spend
            </div>
            <div className="avgsaving m-5">
                Avg Monthly Savings
            </div>
            <div className="avginvestment m-5">
                Avg Monthly Investment 
            </div>
            <div className="btn m-5 ">
                <button onClick={()=>navigate('/home')} className='cursor-pointer bg-black px-5 py-2 rounded text-white'>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Budget