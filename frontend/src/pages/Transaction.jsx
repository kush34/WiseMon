import React, { useState } from 'react'
import BackBtn from '../components/BackBtn'
import TransactionCard from '../components/TransactionCard'
const Transaction = () => {
    const [list,setList] = useState(
        [
            { "title": "Lunch at McDonald's", "category": "Food", "amount": 250, "time": "2025-02-09T08:30:00Z" },
            { "title": "Uber Ride to Office", "category": "Transport", "amount": 120, "time": "2025-02-08T14:15:00Z" },
            { "title": "Weekly Grocery Shopping", "category": "Groceries", "amount": 450, "time": "2025-02-07T18:00:00Z" },
            { "title": "Movie Night Tickets", "category": "Entertainment", "amount": 300, "time": "2025-02-06T20:45:00Z" },
            { "title": "New Sneakers", "category": "Shopping", "amount": 700, "time": "2025-02-05T17:20:00Z" },
            { "title": "Electricity Bill Payment", "category": "Bills", "amount": 1500, "time": "2025-02-04T10:00:00Z" },
            { "title": "Doctor Consultation Fee", "category": "Health", "amount": 600, "time": "2025-02-03T09:30:00Z" },
            { "title": "Udemy Python Course", "category": "Education", "amount": 2000, "time": "2025-02-02T11:45:00Z" },
            { "title": "Weekend Trip to Goa", "category": "Travel", "amount": 3500, "time": "2025-02-01T16:10:00Z" },
            { "title": "Birthday Gift for Friend", "category": "Miscellaneous", "amount": 400, "time": "2025-01-31T13:25:00Z" }
          ]
          
      )
  return (
    <div className='bg-zinc-300 h-screen'>
        <div className="title text-3xl font-medium p-5">
            Transaction
        </div>
        <div className="transaction-list flex flex-col gap-3 p-4 m-5 rounded h-4/6 bg-white">
            {list.map((item)=>{
                return(
                    <TransactionCard props={item}/>
                )
            })}

        </div>
        <div className='flex justify-end p-5'>
            <BackBtn/>
        </div>
    </div>
  )
}

export default Transaction