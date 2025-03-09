
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Graph = ({expenseData}) => {
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
  // console.log(expenseData)
  const labels=expenseData.map((expense) => {
    const date = new Date(expense.createdAt); 
    return date.toLocaleDateString(); 
  });
  const amounts = expenseData.map((expense) => expense.amount);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        borderColor: "rgba(0,0, 0)",
        backgroundColor: "rgba(1, 192, 192, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "rgba(1,1, 1)",
      },
    ],
  };
  return (
    <div className='flex flex-col md:flex-row bg-white m-5 h-full rounded-xl justify-between'>
      <div className='flex justify-center items-center w-full md:w-4/5  h-full'>
      <Line data={chartData} options={options} />
      </div>
      <div className='flex flex-row gap-5 md:flex-col justify-end items-end m-2 md:m-5'>
        <span className='text-lg md:text-xl'>Balance</span>
        <span className='text-2xl md:text-6xl font-medium'>26,312</span>
      </div>
    </div>
  )
}

export default Graph