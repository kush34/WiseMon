import React from 'react'
import { Clapperboard } from 'lucide-react';
const TransactionCard = () => {
  return (
    <div className='flex justify-around'>
        <div className="category">
            <Clapperboard />
        </div>
        <div className="title">
            Movies
        </div>
        <div className="amount">
            550
        </div>
        <div className="time">
            12th Jan
        </div>
    </div>
  )
}

export default TransactionCard