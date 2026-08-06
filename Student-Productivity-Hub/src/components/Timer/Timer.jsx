import React, { use, useEffect, useRef } from 'react'
import { useState } from 'react';
const Timer = () => {
  const intervalRef=useRef(null);
  const [time, setTime] = useState(1500);
  const [mode, setMode] = useState("pomodoro");
  const minutes=Math.floor(time/60);
  const seconds=time%60;
  const formattedSeconds=seconds.toString().padStart(2,"0");  
  useEffect(()=>{
    const latestTime=localStorage.getItem("pomo");
    setTime(latestTime ? Number(latestTime):1500);
  },[])
  const startTimer=()=>{
    if(intervalRef.current){
      return;
    }
  const x =setInterval(() => {
      setTime((prevtime)=>{
        
        if(prevtime===0){
          clearInterval(intervalRef.current);
          intervalRef.current=null;
          return 0;
        }
        const newTime=prevtime-1;
        if(mode==="pomodoro"){
          localStorage.setItem("pomo",newTime);
        }
        else if(mode==="short"){
          localStorage.setItem("short",newTime);
        }
        else{
          localStorage.setItem("long",newTime);
        }
        return newTime;
      })
    }, 1000);
    intervalRef.current=x;
  }

  const pauseTImer=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }

  const resetTimer=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    if(mode ==="pomodoro"){
      setTime(1500);
      localStorage.setItem("pomo",1500);
    }else if(mode==="short"){
    setTime(300);
    localStorage.setItem("short",300);
  } else{
    setTime(900);
    localStorage.setItem("long",900)
  }
}
  useEffect(()=>{
    if(mode==="pomodoro"){
      const savedTime=localStorage.getItem("pomo");
      setTime(savedTime? Number(savedTime):1500);
    }else if(mode==="short"){
      const savedTime=localStorage.getItem("short");
      setTime(savedTime? Number(savedTime):300);
    }
    else{
      const savedTime=localStorage.getItem("long");
      setTime(savedTime? Number(savedTime):900);
    }
  },[mode])

  return (
    <div className="bg-white rounded-xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-300 flex-1 m-4 sm:m-10 lg:m-40">
      <div className='flex flex-wrap gap-4 mb-6 justify-center '>
          <button className="bg-red-500 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-white text-lg sm:text-2xl cursor-pointer" onClick={()=>{
            pauseTImer();
            setMode("pomodoro")
          }}>Pomodoro</button>
          <button className='bg-green-500 px-8 py-4 rounded-xl font-medium text-white text-2xl cursor-pointer' onClick={()=>{
            pauseTImer();
            setMode("short")
          }}>Short Break</button>
          <button className='bg-blue-500 px-8 py-4 rounded-xl font-medium text-white text-2xl cursor-pointer' onClick={()=>{
            pauseTImer();
            setMode("long")
          }}>Long Break</button>
      </div>
  
        <h1 className='text-3xl font-bold text-center'>Pomodoro Timer</h1>
        <h2 className='text-7xl font-bold text-center mt-8'>{minutes}:{formattedSeconds}</h2>
        <div className='flex justify-center gap-4 mt-8'>
          <button className='bg-green-500  cursor-pointer hover:bg-green-600 text-2xl px-5 py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95' onClick={()=>{
            startTimer();
          }}>Start</button>
          <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 px-5 text-2xl  py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95 " onClick={()=>{
            pauseTImer();
          }}>Pause</button>
          <button className="bg-red-500 cursor-pointer text-2xl  hover:bg-red-600 px-5 py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95" onClick={()=>{
            resetTimer();
          }}>Reset</button>
        </div>
      </div>
  )
}

export default Timer
