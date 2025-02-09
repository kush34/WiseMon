import React from 'react'
import BackBtn from '../components/BackBtn'
import TransactionCard from '../components/TransactionCard'
const Transaction = () => {
  return (
    <div className='bg-zinc-300 h-screen'>
        <div className="title text-3xl font-medium p-5">
            Transaction
        </div>
        <div className="transaction-list flex flex-col gap-3 p-4 m-5 rounded h-4/6 bg-white">
            <TransactionCard/>
            <TransactionCard/>
            <TransactionCard/>
        </div>
        <div className='flex justify-end p-5'>
            <BackBtn/>
        </div>
    </div>
  )
}

export default Transaction