import React from 'react'
import { House } from 'lucide-react';
import { BrainCircuit } from 'lucide-react';
import { RadioTower } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='text-white bg-black h-screen'>
        <div className="brand-title hover:text-zinc-400 font-bold p-5 text-2xl">
            WiseMon
        </div>
        <div className="navlinks p-5 text-xl">
            <ul className=''>
                <li onClick={()=>navigate('/home')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><House />Home</li>
                <li onClick={()=>navigate('/analyze')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><BrainCircuit /> Analyze</li>
                <li onClick={()=>navigate('/communities')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><RadioTower />Communities</li>
                <li onClick={()=>navigate('/blog')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><Newspaper />Blog</li>
                <li onClick={()=>navigate('/investment')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><IndianRupee />Investment</li>
                <li onClick={()=>navigate('/addExpense')} className='mx-1 my-5 cursor-pointer flex gap-2 hover:text-zinc-400'><IndianRupee />Add Expense</li>
            </ul>
        </div>
        <div onClick={()=>navigate('/profile')} className="ml-5 absolute bottom-0 profile flex items-center justify-start cursor-pointer hover:text-zinc-400">
            <div  className="image-profile">
                <img
                className='mx-2 my-5 w-10 h-10 rounded-full'  
                src={"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1739024263~exp=1739027863~hmac=99a6ed1049c1c5dd8d6edc052267c5618ca1adc396fef5dab4f456992c39999d&w=740"} alt="" /></div>   
            <div className="username">UserfromBackend</div>
        </div>
    </div>
  )
}

export default Sidebar