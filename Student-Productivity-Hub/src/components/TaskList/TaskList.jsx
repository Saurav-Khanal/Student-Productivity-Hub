import React from 'react'
import { useState } from 'react'
const TaskList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const formhandler=(e)=>{
    setTask(e.target.value);
  }

  const AddTask=()=>{
    const currentTasks=[...taskList];
    currentTasks.push(task);
    setTaskList(currentTasks);
    console.log(currentTasks);
    setTask('');
    }
    const deleteTask=(idx)=>{
      const newTasks=taskList.filter((task,index)=>{
        return (idx!==index);
      })
      setTaskList(newTasks);
    }
  return (
    <div>
    <div className='bg-white  rounded-lg mt-6 shadow-2xl p-10  '>
      <h1 className='text-3xl font-bold'>Tasks</h1>
      <div className='flex gap-4 mt-6'>
      <input onChange={(e)=>{
        formhandler(e);
      }} className="flex-1 border rounded-lg p-3" value={task} type='text' placeholder='Enter a task... '/>
      <button onClick={()=>{
        AddTask();
      }} className='bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition-all duration-200 '>Add Task</button>
      </div>
      </div>
      <ul>
        {taskList.map((ele,idx)=>{
          return(
            <li key={idx} className='flex justify-between items-center bg-gray-100 rounded-lg p-3 mt-3'>
              <span>{ele}</span>
            <button onClick={()=>{
              deleteTask(idx);
            }} >
              Delete
            </button>
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default TaskList
