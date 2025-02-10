import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const handleSubmit = async () => {
    await axios
      .post(
        `${import.meta.env.VITE_URL}/user/login`,
        {
          email,
          password,
        },
        {
          Credentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.Token);
        if (res.data.Token) {
          localStorage.setItem("Token", JSON.stringify(res.data.Token));
          navigate("/home")
        }
      });
    localStorage.setItem();
  };
  return (
    <div className='bg-white w-2/3 xl:w-1/2 h-1/2 rounded flex flex-col justify-center items-center '>
        <div className="head text-2xl font-semibold mb-5">
                Login
        </div>
        <div className='px-5 py-2'>
            <input onChange={(e)=>setEmail(e.target.value)} className='outline-none' type="text" placeholder='enter your mail address' name="" id="" />
        </div>
        <div className='px-5 py-2 '>
            <input onChange={(e)=>setPassword(e.target.value)} className='outline-none' type="password" placeholder='enter your password' name="" id="" />
        </div>
        <div className="Submit">
            <button onClick={handleSubmit} className='bg-green-600 text-white px-4 py-2 rounded m-5'>Submit</button>
        </div>
    </div>
  )
}

export default Login
