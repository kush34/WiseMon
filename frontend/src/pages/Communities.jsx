import React from 'react'
import BackBtn from '../components/BackBtn';
import PostCard from '../components/PostCard';
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
        <div className="post-area m-5 w-full md:w-2/5">
          <div className='flex justify-center w-full items-center gap-5'>
              <textarea name="" 
                placeholder='ask question? or share your thought' 
                className='m-5 resize-none outline-none w-full bg-zinc-200 rounded px-2 py-1' id=""></textarea>
            <div className="sharebtm">
              <button className='bg-green-600 text-white font-medium px-2 py-1 rounded'>Share</button>
            </div>
            <div className="action">

            </div>
          </div>
        </div>
        <div className="post-list flex flex-col gap-5 h-full md:w-2/5 m-5">
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
      </div>
    </div>
  )
}

export default Communities
