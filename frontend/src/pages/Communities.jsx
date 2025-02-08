import React from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
const Communities = () => {
  const navigate = useNavigate();
  return (
    <div>
      Communities
      <div>
        <button className='cursor-pointer' onClick={()=>navigate('/home')}>Back</button>
      </div>
      <div className="post-area">

      </div>
      <div className="post-list">

      </div>
    </div>
  )
}

export default Communities
