import React from 'react'
import TransactionCard from './TransactionCard'
const TransactionList = () => {
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
      <div className="list flex flex-col gap-4">
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
        <TransactionCard/>
      </div>
    </div>
  )
}

export default TransactionList