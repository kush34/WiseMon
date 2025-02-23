import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn'
import axios from 'axios';
const Profile = () => {
  const [user,setUser] = useState();
  const [salary,setSalary] = useState();
  const userInfo = async ()=>{
    let token = JSON.parse(localStorage.getItem("Token"));
    if(!token){
        navigate('/')
    }
    axios.get(`${import.meta.env.VITE_URL}/user/userInfo`, 
      {headers: {
      Authorization: `Bearer ${token}`,
      }})
    .then((res)=>{
      console.log(res);
      setUser(res.data)
      setSalary(res.data.salary)
    })
  }
  const updateUserInfo = async ()=>{
    let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        axios.post(`${import.meta.env.VITE_URL}/user/updateUserInfo`,{
          newSalary:salary
        }, 
          {headers: {
          Authorization: `Bearer ${token}`,
          }})
  }

  useEffect(()=>{
    userInfo();
  },[])
  return (
    <div>
        <div className='text-2xl font-medium p-5'>
          Profile Page
        </div>
        <div className="main m-5 h-[60vh]">
          <div className="p-2 greetings text-xl font-medium">
            Hello,{user?.name || "user"}
          </div>
          <div className="user-info flex flex-col justify-center items-center">
            <div className="profileImg">
              <img className='rounded-full w-20 h-20' src="https://placehold.co/400x400" alt="" />
            </div>
            <div className="userName">
              <input value={user?.name || "user"} type="text" className='bg-zinc-200 outline-none rounded m-2 text-center px-2 py-1' placeholder='your name' name="" id="" readOnly/>
            </div>
            <div className="monthlyIncome">
              <input onChange={(e)=>setSalary(e.target.value)} value={salary} type="number" className='bg-zinc-200 outline-none rounded m-2 text-center px-2 py-1' placeholder='your monthlyIncome' name="" id="" />
            </div>
            <div className="updateInfo">
              <button onClick={updateUserInfo} className='bg-green-600 m-2 px-5 py-1 rounded text-white font-medium'>Save</button>
            </div>
          </div>
        </div>
      <div className="backbtn p-5">
        <BackBtn/>
      </div>
    </div>
  )
}

export default Profile
