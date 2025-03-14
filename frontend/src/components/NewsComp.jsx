import React,{useEffect, useState} from 'react'
import axios from 'axios';
const NewsComp = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async ()=>{
        console.log("func fired1");
        let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        axios.get(`${import.meta.env.VITE_URL}/user/news`, 
          {headers: {
          Authorization: `Bearer ${token}`,
          }})
        .then((res)=>{
          console.log(res.data);
          setNews(res.data.articles)
        })
    }
    useEffect(()=>{
        fetchNews()
    },[])
    return (
    <div>
        <ul className='text-sm'>
        {news.slice(0, 5).map((article, index) => (
          <li key={index} className='bg-zinc-300 m-2 p-2'>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={`${article.urlToImage}`} alt="" srcset="" />
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsComp