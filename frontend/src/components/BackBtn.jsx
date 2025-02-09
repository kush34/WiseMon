import React from 'react'
import { useNavigate } from 'react-router-dom'
const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/home')} className='px-5 py-2 w-18 bg-black text-white rounded cursor-pointer'>Back</div>
  )
}

export default BackBtn