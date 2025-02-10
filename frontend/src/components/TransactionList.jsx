import React, { useEffect, useState } from 'react'
import TransactionCard from './TransactionCard'
const TransactionList = ({expenseData}) => {
  const [list,setList] = useState([])
  console.log(list)
  useEffect(()=>{
    setList(expenseData);
  },[expenseData])
  return (
    <div className=' mx-5 md:m-5 bg-white h-full rounded-xl'>
      <div className="titleNfilters flex justify-between">
        <div className="title p-5 text-xl font-bold">
          Latest Transaction
        </div>
        <div className="filters flex gap-2 p-3">
          <div className="category">
            category
          </div>
          <div className="amount">
            amount
          </div>
        </div>
      </div>
      <div className="list flex flex-col gap-5 p-2 h-3/4 overflow-y-scroll no-scrollbar">
        {list.map((item)=>{
            return(
              <TransactionCard props = {item}/>
            )
        })}
      </div>
    </div>
  )
}

export default TransactionList