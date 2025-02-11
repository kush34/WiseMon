import { BrainCircuit, House, IndianRupee, Newspaper, Plus, RadioTower } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const MobileNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-black text-white w-full h-12 rounded'>
        <ul className='flex justify-around items-center'>
                <li onClick={()=>navigate('/home')} className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><House /></li>
                <li onClick={()=>navigate('/analyze')} className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><BrainCircuit /> </li>
                <li onClick={()=>navigate('/addExpense')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><Plus /></li>
                <li onClick={()=>navigate('/communities')} className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><RadioTower /></li>
                <li onClick={()=>navigate('/blog')} className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><Newspaper /></li>
                <li onClick={()=>navigate('/investment')} className='mx-1 my-3 cursor-pointer flex gap-2 hover:text-zinc-400'><IndianRupee /></li>
        </ul>
    </div>
  )
}

export default MobileNavigation