import React from 'react'
import { ClipboardList} from 'lucide-react'
const StatCard = ({title,icon,value}) => {
  return (
    <div>
        <div className='bg-white rounded-lg p-6 shadow-md '>
          <div className='flex justify-between items-center'>
    <h1 className='text-gray-700 text-sm'>{title}</h1>
    {icon}
      </div>
      <span className='text-4xl font-bold mt-2'>{value}</span>
        </div>
      </div>
  )
}

export default StatCard
