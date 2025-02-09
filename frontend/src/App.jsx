import React from 'react'
import Navigation from './components/Navigation'
import { useNavigate } from 'react-router-dom'
import SplineScene from './components/SplineScene'
const App = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-black w-full h-screen text-white'>
      <div className='p-2'>
        <Navigation/>
      </div>
      <div className='flex flex-col md:flex-row m-10'>
        <div className='md:w-1/2'>
          <SplineScene/>
        </div>
        <div className="md:w-1/2 h-[35vh] md:h-[70vh] flex flex-col justify-center items-center">
          <div className='flex flex-col text-xl md:text-4xl'> 
            Your Ultimate 
            <span className='text-2xl md:text-6xl font-bold'>
              Finance Guide
            </span> 
          </div>
          <div>
            <button className='bg-green-600 rounded px-5 py-2 m-5 cursor-pointer'>Get Started</button>
          </div>
        </div>
      </div>
      <div className="credits flex justify-center items-center text-white font-medium">
        Made by AARC Team
      </div>
    </div>
  )
}

export default App
