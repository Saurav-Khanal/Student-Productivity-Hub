import { ClipboardList, Notebook, Timer } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import StatCard from '../statCard/StatCard'

const Dashboard = () => {
  const [totalNotes, setTotalNotes] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [focusTime, setFocusTime] = useState(0);
  useEffect(()=>{
    setTotalNotes(Number(localStorage.getItem("totalNotes")) || 0);
    setTotalTasks(Number(localStorage.getItem("totalTasks")) || 0);
    setFocusTime(Number(localStorage.getItem("focusTime")) || 0);
  },[])
  return (
    <div className='p-10 bg-amber-300 flex-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='text-gray-600 mt-2 mb-2'>Welcome back! Let's have a productive day.</p>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
    <StatCard title="Total Tasks" icon={<ClipboardList/>} 
    value={totalTasks}/>
    <StatCard title="Notes" icon={<Notebook/>} value={totalNotes}/>
    <StatCard title="Focus Time" icon={<Timer/>} value={focusTime}/>
        </div>
    </div>
  )
}

export default Dashboard
