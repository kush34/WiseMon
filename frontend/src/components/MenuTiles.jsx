import React from 'react'
import { useNavigate } from 'react-router-dom'
const MenuTiles = () => {
    const navigate = useNavigate();
  return (
    <div className='m-5 flex gap-5 justify-center items-center'>
        <div onClick={()=>navigate('/budget')} className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Budget
        </div>
        <div onClick={()=>navigate('/transaction')} className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Transaction
        </div>
        <div onClick={()=>navigate('/debt')} className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Debt
        </div>
        <div onClick={()=>navigate('/goals')} className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Goals
        </div>
    </div>
  )
}

export default MenuTiles