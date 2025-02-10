import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn'
import BlogDispComp from '../components/BlogDispComp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const Blog = () => {
    const navigate = useNavigate(); 
    const [blogList,setBlogList]= useState([]);

    const fetchBlogs = async ()=>{
        let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        axios.get(`${import.meta.env.VITE_URL}/blog/getBlogs`, 
            {headers: {
            Authorization: `Bearer ${token}`,
            }})
          .then((res)=>{
            console.log(res);
            setBlogList(res.data)
          })    
    }

    useEffect(()=>{
        fetchBlogs();
    },[])
  return (
    <div className='text-black flex flex-col'>
        <div className="blog-list flex flex-wrap gap-10 w-5/6 m-5">
            {
                blogList.map((item)=>{
                    return(
                        <BlogDispComp props={item}/>
                    )
                })
            }
        </div>
        <div className='flex justify-end p-5'>
            <BackBtn/>
        </div>
    </div>
  )
}

export default Blog
