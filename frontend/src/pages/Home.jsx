import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import MenuTiles from '../components/MenuTiles'
import TransactionList from '../components/TransactionList'

const Home = () => {
  return (
    <div className='flex'>
        <div className='w-1/5 bg-black h-screen'>
            <Sidebar/>
        </div>
        <div className="main bg-zinc-300 w-4/5 h-screen">
            <div className="graph h-2/5 w-full">
                <Graph/>
            </div>
            <div className="menu-tiles w-full">
                <MenuTiles/>
            </div>
            <div className="transaction h-2/5 w-full">
                <TransactionList/>
            </div>
        </div>
    </div>

  )
}

export default Home