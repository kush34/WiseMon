import React from 'react'
import BackBtn from '../components/BackBtn';
const Communities = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-2xl font-medium p-5'>
          Communities
        </div>
        <div className="backbtn p-5">
          <BackBtn/>
        </div>
      </div>
      <div className='w-ful h-screen flex flex-col justify-center items-center'>
        <div className="post-area m-5 w-2/5">
          <div className='flex justify-center items-center gap-5'>
            <input className='outline-none bg-zinc-200 rounded px-2 py-1' type="text" placeholder='ask question? share thoughts'/>
            <div className="sharebtm">
              <button className='bg-green-600 text-white font-medium px-2 py-1 rounded'>Share</button>
            </div>
          </div>
        </div>
        <div className="post-list h-full w-2/5">
          Post-list

        </div>
      </div>
    </div>
  )
}

export default Communities
