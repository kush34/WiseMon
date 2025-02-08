import React from 'react'
import Sidebar from '../components/Sidebar'
import Graph from '../components/Graph'
import MenuTiles from '../components/MenuTiles'
import TransactionList from '../components/TransactionList'
import MobileNavigation from '../components/MobileNavigation'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row bg-zinc-300'>
        <div className='hidden md:inline w-1/6 h-screen'>
            <Sidebar/>
        </div>
        <div className="main bg-zinc-300 w-full md:w-5/6 h-screen">
            <div className="graph h-3/6 w-full">
                <Graph/>
            </div>
            <div className="menu-tiles w-full">
                <MenuTiles/>
            </div>
            <div className="transaction h-2/6 w-full">
                <TransactionList/>
            </div>
            <div className="absolute w-full mobilenavigation md:hidden">
                <MobileNavigation/>
            </div>
        </div>
    </div>

  )
}

export default Home