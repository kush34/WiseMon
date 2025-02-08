import React from 'react'
import Login from '../components/Login'
import Register from './Register'

const Authenticate = () => {

  return (
    <div className='flex'>
      <div className="left w-1/2 bg-zinc-900 h-screen flex justify-center items-center">
        <div className="heading text-2xl font-semibold text-white">
            Move towards<br/>  
            <span className='text-6xl'>
                Better Future
            </span>
        </div>
      </div>
      <div className="right w-1/2 bg-zinc-300 h-screen flex justify-center items-center">
        <Login/>
      </div>
    </div>
  )
}

export default Authenticate
