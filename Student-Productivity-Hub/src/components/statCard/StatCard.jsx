import React from 'react'
import { ClipboardList} from 'lucide-react'
const StatCard = (props) => {
  return (
    <div>
        <div className='bg-white rounded-lg p-6 shadow-md '>
          <div className='flex justify-between items-center'>
    <h1 className='text-gray-700 text-sm'>{props.title}</h1>
      {props.icon}
      </div>
      <span className='text-4xl font-bold mt-2'>{props.value}</span>
        </div>
      </div>
  )
}

export default StatCard
