import React, { use, useRef } from 'react'
import { useState } from 'react';
const Timer = () => {
  const intervalRef=useRef(null);
  const [time, setTime] = useState(1500);
  const minutes=Math.floor(time/60);
  const seconds=time%60;
  const formattedSeconds=seconds.toString().padStart(2,"0");  
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
        return prevtime-1;
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
    const inital_time=25*60;
    setTime(inital_time)
  }
  return (
    <div className="bg-white rounded-xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-300 flex-1">
        <h1 className='text-3xl font-bold text-center'>Pomodoro Timer</h1>
        <h2 className='text-7xl font-bold text-center mt-8'>{minutes}:{formattedSeconds}</h2>
        <div className='flex justify-center gap-4 mt-8'>
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTImer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
  )
}

export default Timer
