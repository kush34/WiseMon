import React from 'react'
import Login from '../components/Login'
import Register from './Register'

const Authenticate = () => {

  return (
    <div className='flex'>
      <div className="hidden left w-1/2 bg-zinc-900 h-screen xl:flex justify-center items-center">
        <div className="heading text-2xl font-semibold text-white">
            Start Your <br/>  
            <span className='text-6xl'>
                Finance Journey
            </span>
        </div>
      </div>
      <div className="right w-full  xl:w-1/2 bg-zinc-300 h-screen flex justify-center items-center">
      <div className='bg-white w-2/3 md:w-1/2 h-1/2 rounded flex flex-col justify-center items-center '>
        <div className="head text-2xl font-semibold mb-5">
                Register
        </div>
        <div className='px-5 py-2'>
            <input className='outline-none' type="text" placeholder='enter your mail address' name="" id="" />
        </div>
        <div className='px-5 py-2 '>
            <input className='outline-none' type="password" placeholder='enter your password' name="" id="" />
        </div>
        <div className='px-5 py-2 '>
            <input className='outline-none' type="password" placeholder='enter your re-password' name="" id="" />
        </div>
        <div className="Submit">
            <button className='bg-green-600 text-white px-4 py-2 rounded m-5'>Submit</button>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Authenticate
