import React from 'react'
import { Share } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Heart } from 'lucide-react';

const PostCard = ({post}) => {
  return (
    <div className='w-full md:w-1/2 h-1/3 flex flex-col rounded justify-around border'>
        <div className="post-title text-xl font-medium p-2">
            {post.title}
        </div>
        <div className="post-description p-2 h-1/3 overflow-hidden">
          {post.content}
        </div>
        <div className="action-post flex justify-between p-2">
            <div className="m-2 hover:scale-125 hover:text-red-700 ease-out like"><Heart/></div>
            <div className="m-2 hover:scale-125 hover:text-green-700 ease-out comment"><MessageCircle/></div>
            <div className="m-2 hover:scale-125 hover:text-sky-700 ease-out share"><Share/></div>
        </div>
    </div>
  )
}

export default PostCard