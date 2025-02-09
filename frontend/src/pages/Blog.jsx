import React from 'react'
import BackBtn from '../components/BackBtn'
const Blog = () => {
  return (
    <div className='text-black flex flex-col'>
        <div className="blog-list flex flex-wrap gap-10 w-5/6 m-5">
            <div className="blog-card h-1/3 md:w-1/5 md:h-1/3 hover:scale-105 hover:ease-out">
                <div className="blogimages">
                    <img className='rounded-xl' src={"https://placehold.co/600x400"} alt="image placeholder" />
                </div>
                <div className="blog-title text-2xl font-semibold">Hello from WiseMon</div>
                <div className="blog-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta.</div>
            </div>
        </div>
        <div className='flex justify-end p-5'>
            <BackBtn/>
        </div>
    </div>
  )
}

export default Blog
