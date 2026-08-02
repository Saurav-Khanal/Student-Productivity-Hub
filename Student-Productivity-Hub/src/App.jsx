import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Notes from './components/Notes/Notes'
import Settings from './components/Settings/Settings'
import Sidebar from './components/Sidebar/Sidebar'
import TaskList from './components/TaskList/TaskList'
import Timer from './components/Timer/Timer'
const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
