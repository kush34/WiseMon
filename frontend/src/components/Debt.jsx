import React, { useEffect, useState } from 'react'
import BackBtn from './BackBtn'

const Debt = () => {
  const [Principal,setPrincipal] = useState(0);
  const [time,setTime] = useState(0);
  const [rate,setRate] = useState(0);
  const [ans,setAns] = useState(0);
  const calculateCI = ()=>{
    let calc = Principal*((1+rate/100)**time);
    setAns(calc);
  }
  useEffect(()=>{
    calculateCI();
  },[rate,Principal,time])
  return (
    <div>
        <div className='text-2xl font-medium p-5'>
          Debt
        </div>
        <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
          <div className="head text-xl font-semibold m-5">
            Compound Intrest Calculator
          </div>
          <div className='calculator flex flex-col gap-2'>
            <input onChange={(e)=>setPrincipal(e.target.value)} type="number" className='rounded bg-zinc-200 outline-none text-center px-2 py-1' placeholder='Enter Principal ₹' />
            <input onChange={(e)=>setRate(e.target.value)} type="number" className='rounded bg-zinc-200 outline-none text-center px-2 py-1' placeholder='Enter Intrest Rate %' />
            <input onChange={(e)=>setTime(e.target.value)} type="number" className='rounded bg-zinc-200 outline-none text-center px-2 py-1' placeholder='Enter Time Period (yr)' />
          </div>
          <div className="calculatebtn">
            <button onClick={calculateCI} className='bg-green-600 px-2 py-1 rounded text-white font-bold'>Calculate</button>
          </div>
          <div className="answer">
            <input value={ans} className='rounded bg-zinc-200 outline-none text-center px-2 py-1' placeholder='your answer' type="text" name="" id="" />
          </div>
        </div>
        <div className="backbtn p-5">
            <BackBtn/>
      </div>
    </div>
  )
}

export default Debt