import React from 'react'

const Login = () => {
  return (
    <div className='bg-white w-1/2 h-1/2 rounded flex flex-col justify-center items-center '>
        <div className="head text-2xl font-semibold mb-5">
                Login
        </div>
        <div className='px-5 py-2'>
            <input className='outline-none' type="text" placeholder='enter your mail address' name="" id="" />
        </div>
        <div className='px-5 py-2 '>
            <input className='outline-none' type="text" placeholder='enter your password' name="" id="" />
        </div>
        <div className="Submit">
            <button className='bg-green-600 text-white px-4 py-2 rounded m-5'>Submit</button>
        </div>
    </div>
  )
}

export default Login
