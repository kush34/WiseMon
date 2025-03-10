import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import BackBtn from '../components/BackBtn';
import NewsCard from '../components/NewsCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockInfo = () => {
    const id = useParams();
    const [loading,setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
    const [stockDetails, setStockDetails] = useState(null);
    const [stockNews, setStockNews] = useState();
    const options = {
      scales:{
        x: {
          grid: {
              display: false 
          }
      },
      y: {
        display: false,     
          grid: {
              display: false 
          }
      }
      }
    }
    const getStockHistory = async ()=>{
        let token = JSON.parse(localStorage.getItem("Token"));
        if(!token){
            navigate('/')
        }
        const response = await axios.post(`${import.meta.env.VITE_URL}/user/getStockInfo`,{
          symbol:id.id
        },
          {headers: {
          Authorization: `Bearer ${token}`,
          }})
        .then((res)=>{
          // console.log(res.data)
          let labels = res.data.map((item) => new Date(item.date).toLocaleDateString());
          const prices = res.data.map((item) => item.close);
          setChartData({
            labels,
            datasets: [
              {
                label: `${id.id} Stock Price`,
                data: prices,
                borderColor: "rgb(0, 0, 0)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
                tension: 0.4,
                pointBackgroundColor: "rgba(1,1, 1)",
              },
            ],
          });
        })

        setLoading(false);
    }
    const getStockNews = async ()=>{
      let token = JSON.parse(localStorage.getItem("Token"));
      if(!token){
          navigate('/')
      }
      const response = await axios.post(`${import.meta.env.VITE_URL}/user/getStockNews`,{
        symbol:id.id
      },
        {headers: {
        Authorization: `Bearer ${token}`,
        }})
      .then((res)=>{
        // console.log(res.data.news)
        setStockNews(res.data.news);
      })

      setLoading(false);
    }
    const getStockParams = async ()=>{
      let token = JSON.parse(localStorage.getItem("Token"));
      if(!token){
          navigate('/')
      }
      const response = await axios.post(`${import.meta.env.VITE_URL}/user/getStockParams`,{
        symbol:id.id
      },
        {headers: {
        Authorization: `Bearer ${token}`,
        }})
      .then((res)=>{
        // console.log(res.data)
        setStockDetails(res.data);
      })

      setLoading(false);
    }
    useEffect(()=>{
        getStockHistory();
        getStockParams();
        getStockNews();
    },[])
  return (
    <div className= 'w-full h-screen border-zinc'>
      <div className='m-5'>
        <BackBtn to="/investment"/>
      </div>
       <div className="p-4 rounded-xl w-full h-4/5 flex justify-center items-center">
        {loading ?  <p>Loading chart...</p> : chartData ? <Line data={chartData} options={options}/> : <p>No data available</p>}
      </div>
      <div className='flex justify-center'>
        {stockDetails && 
        <div className="summaryDe flex gap-5 flex-wrap w-3/4">
          <div>PE Ratio:<span className='font-medium'>{stockDetails.peRatio}</span> </div>
          <div>Market Cap.: <span className='font-medium'>{stockDetails.marketCap}</span></div>
          <div>Dividend Yield: <span className='font-medium'>{stockDetails.dividendYield}</span></div>
          <div>Previous Close: <span className='font-medium'>{stockDetails.previousClose}</span></div>
          <div>52-Week High: <span className='font-medium'>{stockDetails.fiftyTwoWeekHigh}</span></div>
          <div>52-Week Low:<span className='font-medium'>{stockDetails.fiftyTwoWeekLow}</span></div>
          <div>Profit Margin: <span className='font-medium'>{stockDetails.profitMargins}</span></div>
          <div>Return On Equity: <span className='font-medium'>{stockDetails.returnOnEquity}</span></div>
        </div>
        }
      </div>
      <div className="news h-screen flex flex-col justify-center m-5 gap-4">
        {stockNews && stockNews.map((news)=>{
          return(
            <NewsCard news ={news}/>
          )
        }) 
        }
      </div>
    </div>
  )
}

export default StockInfo