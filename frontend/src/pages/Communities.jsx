import React, { useEffect, useState } from 'react'
import BackBtn from '../components/BackBtn';
import PostCard from '../components/PostCard';
import PostArea from '../components/PostArea';
import axios from 'axios';
const Communities = () => {
  const [PostList,setPostList]= useState();

  const fetchPosts = async ()=>{
    let token = JSON.parse(localStorage.getItem("Token"));
    await axios.get(`${import.meta.env.VITE_URL}/post/getPosts`,{headers: {
        Authorization: `Bearer ${token}`,
    }},)
    .then((res)=>{
      setPostList(res.data)
    })
  }
  useEffect(()=>{
    fetchPosts();
  },[])
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-2xl font-medium p-5'>
          Communities
        </div>
        <div className="backbtn p-5">
          <BackBtn/>
        </div>
      </div>
      <div className='w-ful flex flex-col justify-center items-center'>
        <PostArea/>
      </div>
      <div className="post-list flex justify-center items-center flex-col gap-5 h-full md:w-full p-5">
        {PostList?.map((post)=>{
          return(
            <PostCard post={post}/>
          )
        })}
      </div>
    </div>
  )
}

export default Communities
