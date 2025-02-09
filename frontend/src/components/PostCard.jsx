import React from 'react'
import { Share } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Heart } from 'lucide-react';

const PostCard = () => {
  return (
    <div className='w-full h-1/3 flex flex-col rounded justify-around border'>
        <div className="post-title text-xl font-medium p-2">
            How to Plan Your SIP?
        </div>
        <div className="post-description p-2 h-1/3 overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut repellat distinctio aperiam vel possimus autem ab architecto magni quisquam dolor, quo mollitia ducimus sint perspiciatis iusto laborum atque rem at ipsam!
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