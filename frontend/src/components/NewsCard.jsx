import React from 'react'

const NewsCard = ({news}) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <div className="image">
            <img className='w-80 rounded-xl h-40' src={`${news?.thumbnail?.resolutions ? `${news.thumbnail.resolutions[0].url}` : "https://placehold.co/1600x400"}`} alt="" />
        </div>
        <div className='w-1/2'>
            <div className="title font-medium text-lg">
                {news.title}
            </div>

            <div className="publisher text-sm">
                {news.publisher}
            </div>
            
            <div className="cursor-pointer publisher text-sm">
                <a target="_blank" href={`${news.link}`}>Link</a>
            </div>
        </div>
  </div>
  )
}

export default NewsCard