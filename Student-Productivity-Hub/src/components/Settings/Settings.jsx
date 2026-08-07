import React, { useEffect } from 'react'
import { useState } from 'react';
const Settings = () => {
  useEffect(()=>{
   const savedPomo= localStorage.getItem("pomoDuration");
    const savedShort=localStorage.getItem("shortDuration");
    const savedLong=localStorage.getItem("longDuration");
    setPomo(savedPomo);
    setShort(savedShort);
    setLong(savedLong)
  },[])
  const [pomo, setPomo] = useState(2);
  const [short, setShort] = useState(4);
  const [long, setLong] = useState(3);
  const PomoHandler=(ele)=>{
    setPomo(ele);
  }

  const ShortHandler=(value)=>{
    setShort(value);
  }

  const LongHandler=(value)=>{
    setLong(value);
  }

  const saveSetting=()=>{
    localStorage.setItem("pomoDuration",pomo);
    localStorage.setItem("shortDuration",short);
    localStorage.setItem("longDuration",long);
  }
  
  return(
    <div className='flex-1'>
      <div className='bg-white rounded-xl shadow-lg p-6'>
      <h2 className='text-2xl font-bold'>Settings</h2>
    <div className='mt-6'>
      <label className='font-medium'>
        Pomodoro Duration (seconds)
      </label>
      <input
      value={pomo}
      onChange={(ele)=>{
        PomoHandler(ele.target.value);
      }}
      type='number'
      className='w-full border rounded-lg p-3 mt-2 outline-none focus:ring focus:ring-blue-500'
      />
      </div>
      <div className='mt-6'>
      <label className='block font-medium'>
        Short break (seconds)
      </label>
      <input
      value={short}
      onChange={(ele)=>{
        ShortHandler(ele.target.value);
      }}
      type='number'
      className='w-full border rounded-lg p-3 mt-2 outline-none focus:ring focus:ring-blue-500'
      />
      </div>
      <div className='mt-6'>
      <label className='block font-medium'>
        Long break (seconds)
      </label>
      <input
      value={long}
      onChange={(ele)=>{
        LongHandler(ele.target.value);
      }}
      type='number'
      className='w-full border rounded-lg p-3 mt-2 outline-none focus:ring focus:ring-blue-500'
      />
      </div>
      <button className='bg-blue-500 hover:bg-blue-600 transition text-white font-medium rounded-lg px-5 py-3 mt-6 w-full '
      onClick={()=>{
        saveSetting();
      }}>
        Save settings
      </button>
    </div>
    </div>
  )
}

export default Settings
