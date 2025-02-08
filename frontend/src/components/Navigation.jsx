import React from 'react'
import {useNavigate} from 'react-router-dom'


const Navigation = () => {
    const navigate = useNavigate()

  return (
    <div className='bg-zinc-900 p-5 rounded flex justify-between'>
        <div className="brand font-bold text-2xl ml-10 cursor-pointer">
            WiseMon
        </div>
        <div className="navlinks flex justify-around mr-10">
            <div 
            className='bg-green-600 px-4 py-2 rounded cursor-pointer'
            onClick={()=>navigate('/authenticate')}
            >
                Login
            </div>
            <div 
            className='px-4 py-2 rounded cursor-pointer'
            onClick={()=>navigate('/register')}
            >
                Sign Up
            </div>
        </div>
    </div>
  )
}

export default Navigation