import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Notes from './components/Notes/Notes'
import Settings from './components/Settings/Settings'
import Sidebar from './components/Sidebar/Sidebar'
import TaskList from './components/TaskList/TaskList'
import Timer from './components/Timer/Timer'
import { useState } from 'react'
const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    <div className="flex h-screen overflow-hidden">
  <Sidebar setCurrentPage={setCurrentPage}
      currentPage={currentPage}
  />
  <main className="flex-1 overflow-y-auto p-6">
    {currentPage === "dashboard" && <Dashboard />}
    {currentPage==="tasks" && <TaskList/>}
    {currentPage==="notes" && <Notes/>}
    {currentPage==="timer" && <Timer/>}
    {currentPage==="settings" && <Settings/>}
  </main>
</div>
  )
}

export default App
