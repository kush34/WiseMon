import React, { useState } from 'react'
import BackBtn from '../components/BackBtn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddExpense = () => {
  const navigate = useNavigate();
  const [description,setDescription] = useState();
  const [category,setCategory] = useState();
  const [amount,setAmount] = useState();
  const validateInput = ()=>{
    if(!description || !amount || !category){
      return false
    }
    if(isNaN(amount)) return false;
    return true;
  }
  const handleSubmit = async ()=>{
    const res = validateInput();
    if(!res) return;
     // console.log(description,amount,category);
     let token = JSON.parse(localStorage.getItem("Token"));
     // console.log(token);
     await axios.post(`${import.meta.env.VITE_URL}/expense/create`,{
         description,
         amount,
         category
     },{headers: {
         Authorization: `Bearer ${token}`,
       }},)
     .then((res)=>{
         // console.log(res);
         if(res.status == 200){
             navigate("/home")
         }
     })
 }
  return (
    <div className='bg-zinc-300 h-screen'>
        <div className='flex justify-center items-center text-2xl font-medium p-5'>
          Add Expense
        </div>
        <div className='w-full flex items-center justify-center h-[70vh]'>
          <div className="container md:w-1/3 flex flex-col items-center bg-white justify-center gap-10 p-10">
            <div className="input-description">
              <input onChange={(e)=>setDescription(e.target.value)} className='outline-none border-b' type="text" name="" id="" placeholder='enter your desciption'/>
            </div>
            <div className="input-category">
            <select 
                  className='border-b outline-none px-18 ' 
                  id="category"
                  onChange={(e)=>setCategory(e.target.value)}
                  value={category}
                  >
                      <option value="grocery">Grocey</option>
                      <option value="fuel">Fuel</option>
                      <option value="investment">Investment</option>
                      <option value="rent">Rent</option>
                      <option value="snacks">Snacks</option>
                  </select>          </div>
            <div className="input-amount">
              <input onChange={(e)=>setAmount(e.target.value)} className='outline-none border-b' type="text" name="" id="" placeholder='enter you amount' />
            </div>
            <div className="submit">
              <button onClick={handleSubmit} className='bg-black text-white font-semibold rounded px-4 py-2 cursor-pointer'>Submit</button>
            </div>
        </div>
        </div>
        <div className="backbtn p-5">
          <BackBtn/>
        </div>
    </div>  )
}

export default AddExpense