import React from 'react'
import { Clapperboard, Bus, Ambulance, Backpack } from "lucide-react";



const TransactionCard = ({props}) => {

  return (
    <div className='flex justify-around'>
        <div className="category w-1/5 flex justify-center">
        
        </div>
        <div className="title w-1/5 flex justify-center">
            {props?.title || "Not found"}
        </div>
        <div className="category w-1/5 flex justify-center">
            {props.category}
        </div>
        <div className="amount w-1/5 flex justify-center">
            {props?.amount || "-"}
        </div>
        <div className="hidden md:flex justify-center time w-1/5">
            {props.time}
        </div>
    </div>
  )
}

export default TransactionCard