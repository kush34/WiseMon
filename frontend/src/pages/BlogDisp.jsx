import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackBtn from '../components/BackBtn'
import { useParams } from 'react-router-dom'

const BlogDisp = () => {
    const id = useParams();
    const [blogInfo , setBlogInfo] = useState();
    const fetchBlogContent = async ()=>{
     let token = JSON.parse(localStorage.getItem("Token"));
     await axios.post(`${import.meta.env.VITE_URL}/blog/blogContent`,{
        blogId:id.id
     },{headers: {
         Authorization: `Bearer ${token}`,
       }},)
     .then((res)=>{
        setBlogInfo(res.data)
     })
    }
    console.log(id.id)
    useEffect(()=>{
        fetchBlogContent();
    },[])
  return (
    <div>
        <div className="blog-image h-[50vh] flex w-full justify-center">
            <img className='h-[50vh] w-3/4' src={blogInfo?.image ? blogInfo?.image :   "https://placehold.co/1600x200"} alt="" />
        </div>
      <div className="w-full text-3xl px-10 py-5 font-bold blogTitl">
        {blogInfo?.title}
      </div>
      <div className='flex justify-center'>
        <div className="blogContent p-5 w-2/4 flex font-medium items-center justify-center">
            {blogInfo?.BlogContent}
        </div>
      </div>
      <div className="backbtn p-5">
        <BackBtn/>
      </div>
    </div>
  )
}

export default BlogDisp