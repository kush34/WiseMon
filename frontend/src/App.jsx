import React from 'react'
import Navigation from './components/Navigation'
const App = () => {
  return (
    <div className='bg-black w-full h-screen text-white'>
      <div className='p-5'>
        <Navigation/>
      </div>
      <div className='flex m-15'>
        <div className="left hero w-1/2 p-10  h-78 text-4xl font-bold flex flex-col justify-center items-center">
          <div className="text-left">
            Your Ultimate<br></br>
            Finance Guide 
          </div>
          <div className="calltoaction font-semibold text-xl bg-green-600 px-4 flex justify-center py-2 rounded mt-5">
            Get Started
          </div>
        </div>
        <div className='w-1/2 '>
          
        </div>
      </div>
      <div className="credits flex justify-center items-center text-white font-medium">
        Made by AARC Team
      </div>
    </div>
  )
}

export default App