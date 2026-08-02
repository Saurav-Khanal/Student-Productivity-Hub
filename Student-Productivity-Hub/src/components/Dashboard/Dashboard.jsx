import { ClipboardList, Notebook, Timer } from 'lucide-react'
import React from 'react'
import StatCard from '../statCard/StatCard'

const Dashboard = () => {
  return (
    <div className='p-10 bg-amber-300 flex-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='text-gray-600 mt-2 mb-2'>Welcome back! Let's have a productive day.</p>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
    <StatCard title="Total Tasks" icon={<ClipboardList/>} 
    value={0}/>
    <StatCard title="Notes" icon={<Notebook/>} value={0}/>
    <StatCard title="Focus Time" icon={<Timer/>} value={0}/>
        </div>
    </div>
  )
}

export default Dashboard
