import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-zinc-900 p-5 rounded flex justify-between'>
        <div className="brand font-bold text-2xl ml-10 cursor-pointer">
            WiseMon
        </div>
        <div className="navlinks flex justify-around mr-10">
            <div className='bg-green-600 px-4 py-2 rounded cursor-pointer'>
                Login
            </div>
            <div className='px-4 py-2 rounded cursor-pointer'>
                Sign Up
            </div>
        </div>
    </div>
  )
}

export default Navigation