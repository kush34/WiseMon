
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Graph = () => {
  const options = {
    scales:{
      x: {
        // display: false,
        grid: {
            display: false // Removes vertical grid lines
        }
    },
    y: {
      display: false,     
        grid: {
            display: false // Removes horizontal grid lines
        }
    }
    }
  }
  return (
    <div className='flex flex-col md:flex-row bg-white m-5 h-full rounded-xl justify-between'>
      <div className='flex justify-center items-center w-full md:w-4/5  h-full'>
        <Line
          className='px-2 py-4 md:mx-10 md:px-5 md:my-2 m-0'
          datasetIdKey='id'
          options={options}
          data={{
            labels: ['Jun', 'Jul', 'Aug',"Sept"],
            datasets: [
              {
                id: 2,
                label: '',
                borderColor: 'rgb(0, 0, 0)',
                data: [10, 15, 12,18],
                tension: 0.3, 
              },
            ],
          }}
          />
      </div>
      <div className='flex flex-row gap-5 md:flex-col justify-end items-end m-2 md:m-5'>
        <span className='text-lg md:text-xl'>Balance</span>
        <span className='text-2xl md:text-6xl font-medium'>26,312</span>
      </div>
    </div>
  )
}

export default Graph