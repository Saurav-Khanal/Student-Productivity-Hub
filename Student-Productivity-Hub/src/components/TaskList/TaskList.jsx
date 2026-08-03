import React, {useEffect } from 'react'
import { useState } from 'react'
const TaskList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const formhandler=(e)=>{
    setTask(e.target.value);
  }

  const AddTask=()=>{
    if(task.trim()===""){
      return;
    }
    const currentTasks=[...taskList];
    currentTasks.push({
      text:task,
      completed:false,
    })
    setTaskList(currentTasks);
    setTask('');

    }
    const deleteTask=(idx)=>{
      const newTasks=taskList.filter((task,index)=>{
        return (idx!==index);
      })
      setTaskList(newTasks);
    }

    const completeTask=(idx)=>{
      const newTasks=taskList.map((task,index)=>{
        if(index===idx){
          return {
            ...task,
            completed:!task.completed,
          }
        }
        return task;
      })
      setTaskList(newTasks);
    }
    useEffect(()=>{
      if(loaded){
      localStorage.setItem("tasks",JSON.stringify(taskList));
      }
    },[taskList,loaded])

    useEffect(()=>{
      const savedTasks= localStorage.getItem("tasks")
    const parsedTasks=JSON.parse(savedTasks);
    if(parsedTasks){
      setTaskList(parsedTasks);
    }
          setLoaded(true);

    },[])

  return (
    <div className='flex-1'>
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
        {taskList.length===0?(
          <p className='text-center text=gray mt-6'>
            No task yet! Add your first task.
          </p>
        ):(
          taskList.map((ele,idx)=>{
          return(
            <li key={idx} className='flex justify-between items-center bg-gray-100 rounded-lg p-3 m-5 font-bold hover:scale-95 transition-all duration-200'>
              <input onChange={()=>{
                completeTask(idx);
              }} type="checkbox" checked={ele.completed}/>
              <span className={ele.completed? "text-gray-500 line-through":""}>
                {ele.text}
              </span>
            <button onClick={()=>{
              deleteTask(idx);
            }} className='bg-red-700 text-white rounded px-5 py-2 hover:bg-red-400' >
              Delete
            </button>
            </li>
          )
        })
        )}
      </ul>
    </div>
  )
}

export default TaskList
