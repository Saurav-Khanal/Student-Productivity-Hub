import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
const Timer = () => {
  const intervalRef=useRef(null);
  const [time, setTime] = useState(1500);
  const [mode, setMode] = useState("pomodoro");
const [completed, setCompleted] = useState(false);
  const minutes=Math.floor(time/60);
  const seconds=time%60;
  const formattedSeconds=seconds.toString().padStart(2,"0");  

  const getDuration=(m)=>{
    if(m==="pomodoro") return Number(localStorage.getItem("pomoDuration")) || 1500;
    if(m==="short") return Number(localStorage.getItem("shortDuration")) || 300;
    return Number (localStorage.getItem("longDuration")) || 900;
  }

  const startTimer=()=>{
    if(time<=0){
      return;
    }
    setCompleted(false);
    if(intervalRef.current){
      return;
    }
  const x =setInterval(() => {
      setTime((prevtime)=>{
        
        if(prevtime<=1){
          clearInterval(intervalRef.current);
          intervalRef.current=null;
          setCompleted(true);
          if(mode==="pomodoro"){
            const pomoDuration=getDuration("pomodoro");//sec
            const focusTime=Number(localStorage.getItem("focusTime")||0);
           localStorage.setItem(
             "focusTime",focusTime+pomoDuration/60);
             localStorage.setItem("pomo",0);
          }else if(mode==="short"){
            localStorage.setItem("short",0);
          }else{
            localStorage.setItem("long",0);
          }
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

  const pauseTimer=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }

  const resetTimer=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setCompleted(false);
    const duration=getDuration(mode);
    setTime(duration);
  if(mode==="pomodoro") localStorage.setItem("pomo",duration);
  else if(mode==="short") localStorage.setItem("short",duration);
  else localStorage.setItem("long",duration);
}
  useEffect(()=>{
    const duration=getDuration(mode);
    const key=mode==="pomodoro" ? "pomo" : mode==="short" ? "short" : "long";
    const saved=localStorage.getItem(key);
    const savedNum=saved? Number(saved) :null;

    if(savedNum !==null && savedNum>0 && savedNum<duration){
        setTime(savedNum);
    }else{
      setTime(duration);
      localStorage.setItem(key,duration);
    }

  },[mode])
  
   useEffect(()=>{
  return ()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }
},[])
  return (
    <div className="bg-white rounded-xl  sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-300 flex-1 m-4 sm:m-10 lg:m-40">
      <div className='flex flex-wrap gap-4 mb-6 justify-center '>
          <button className="bg-red-500 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-white text-lg sm:text-2xl cursor-pointer" onClick={()=>{
            pauseTimer();
            setMode("pomodoro")
          }}>Pomodoro</button>
          <button className='bg-green-500 px-8 py-4 rounded-xl font-medium text-white text-2xl cursor-pointer' onClick={()=>{
            pauseTimer();
            setMode("short")
          }}>Short Break</button>
          <button className='bg-blue-500 px-8 py-4 rounded-xl font-medium text-white text-2xl cursor-pointer' onClick={()=>{
            pauseTimer();
            setMode("long")
          }}>Long Break</button>
      </div>
  
        <h1 className='text-3xl font-bold text-center'>Pomodoro Timer</h1>
        <h2 className='text-7xl font-bold text-center mt-8'>{minutes}:{formattedSeconds}</h2>
        <div className='flex justify-center gap-4 mt-8'>
          <button className= 'bg-green-500  cursor-pointer hover:bg-green-600 text-2xl px-5 py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95' onClick={()=>{
            startTimer();
          }}>Start</button>
          <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 px-5 text-2xl  py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95 " onClick={()=>{
            pauseTimer();
          }}>Pause</button>
          <button className="bg-red-500 cursor-pointer text-2xl  hover:bg-red-600 px-5 py-2 rounded-lg text-white font-medium transition duration-200 shadow-md hover:scale-105 active:scale-95" onClick={()=>{
            resetTimer();
          }}>Reset</button>
        </div>
      </div>
  )
}

export default Timer
