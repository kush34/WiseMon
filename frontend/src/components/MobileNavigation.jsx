import { BrainCircuit, House, IndianRupee, Newspaper, RadioTower } from 'lucide-react'
import React from 'react'

const MobileNavigation = () => {
  return (
    <div className='bg-black text-white w-full h-12 rounded'>
        <ul className='flex justify-around items-center'>
                <li className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><House /></li>
                <li className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><BrainCircuit /> </li>
                <li className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><RadioTower /></li>
                <li className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><Newspaper /></li>
                <li className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><IndianRupee /></li>
        </ul>
    </div>
  )
}

export default MobileNavigation