import React from 'react'

const MenuTiles = () => {
  return (
    <div className='m-5 flex gap-5 items-center'>
        <div className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Budget
        </div>
        <div className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Tracking
        </div>
        <div className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Debt
        </div>
        <div className="Menucard bg-white w-1/5 h-10 rounded-xl  flex items-center justify-center font-semibold cursor-pointer">
            Goals
        </div>
    </div>
  )
}

export default MenuTiles