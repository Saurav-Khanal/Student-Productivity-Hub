import React from 'react'
import {ClipboardList, LayoutDashboard, NotebookPen, Timer, Settings} from 'lucide-react';
const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-black text-white p-5'>
        <h1 className='text-lg font-bold mb-5 text-center'>Student Productivity Hub</h1>
        <ul className=' list-none space-y-6'>
            <li className='p-3 rounded cursor-pointer bg-blue-600  transition-all duration-200 flex gap-2' > <LayoutDashboard/> Dashboard</li>
            <li className='p-3 rounded cursor-pointer hover:bg-gray-800 transition-all duration-200 flex gap-2'> <ClipboardList/>Tasks</li>
            <li className='p-3 rounded cursor-pointer hover:bg-gray-800 transition-all duration-200 flex gap-2'><Timer/>Timer</li>
            <li className='p-3 rounded cursor-pointer hover:bg-gray-800 transition-all duration-200 flex gap-2'><NotebookPen/>Notes</li>
            <li className='p-3 rounded cursor-pointer hover:bg-gray-800 transition-all duration-200 flex gap-2'> <Settings/> Settings</li>
        </ul>
    </div>
  )
}

export default Sidebar
