import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockInfo = () => {
    const id = useParams();
    const [loading,setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
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
    
    useEffect(()=>{
        getStockHistory();
    },[])
  return (
    <div className= 'w-full h-screen border-zinc'>
       <div className="p-4 rounded-xl w-full h-4/5 flex justify-center items-center">
        {loading ?  <p>Loading chart...</p> : chartData ? <Line data={chartData} options={options}/> : <p>No data available</p>}
      </div>
    </div>
  )
}

export default StockInfo