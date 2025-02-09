import React from 'react'
import Sidebar from '../components/Sidebar'
import BackBtn from '../components/BackBtn';
const Communities = () => {
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
      <div className="backbtn p-5">
        <BackBtn/>
      </div>
    </div>
  )
}

export default Communities
