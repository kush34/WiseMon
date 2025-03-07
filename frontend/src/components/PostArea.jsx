import React, { useState } from 'react'
import axios from 'axios';
const PostArea = () => {
    const [title,setTitle] = useState();
    const [content,setContent] = useState();

    const validateInput = ()=>{
        if(!title || !content){
          return false
        }
        return true;
    }

    const handleSubmit = async ()=>{
        console.log(title)
        console.log(content)
        const res = validateInput();
        if(!res) return;
        let token = JSON.parse(localStorage.getItem("Token"));
        await axios.post(`${import.meta.env.VITE_URL}/post/create`,{
            title,
            content
        },{headers: {
            Authorization: `Bearer ${token}`,
        }},)
        .then((res)=>{
        })
    }
  return (
    <div className='flex xl:w-1/3 items-center flex-col gap-2 bg-zinc-200 p-10 rounded-xl'>
        <div className='text-xl font-semibold'>
            What's bugging you...
        </div>
        <div>
            <input onChange={(e)=>setTitle(e.target.value)} className='bg-zinc-300 px-5 py-1 rounded outline-none' type="text" name="" id="" placeholder='your post title' />
        </div>
        <div>
            <textarea onChange={(e)=>setContent(e.target.value)} className='bg-zinc-300 px-5 py-1 rounded resize-none outline-none' name="" id="" placeholder='ask your questions'></textarea>
        </div>
        <div className="share">
            <button onClick={handleSubmit} className='bg-green-600 cursor-pointer px-5 py-2 text-white font-bold rounded'>Share</button>
        </div>
    </div>
  )
}

export default PostArea