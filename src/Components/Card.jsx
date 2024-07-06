import React from 'react'
import { FaLock, FaCheck } from 'react-icons/fa'

const Card = ({ plan }) => {
  return (
    <div key={plan.id} className='w-[30vw] m-auto p-10'>
      <h1>Choose your plan</h1>
      <img src={plan.banner} alt="image banner" className="w-72 m-auto" />
      
      <div className='flex flex-col m-[10px] justify-center items-center bg-cyan-500 rounded-lg min-h-16 relative'>
        <h1 className='font-light text-[8px] absolute top-[230px]'>{plan.tagged_as}</h1>
        <div>
          <h1>{plan.plan_name}</h1>
          <h1 className='text-[8px] text-center'>Rs {plan.cost_per_day}/day</h1>
        </div>
      </div>
      
      <div className='w-[200px]'>
        <h1>{plan.claims}</h1>
      </div>
      
      <ul className='list-none'>
        {plan.description.data_monthly.map((item, index) => (
          <li key={index} className='flex items-center'>
            {item.isLocked === 'True' ? <FaLock className=' mr-2' /> : <FaCheck className=' mr-2' />}
            {item.text}
          </li>
        ))}
      </ul>
      
      <button className='bg-blue-500 p-2 rounded-lg w-full text-white'>Choose plan</button>
    </div>
  )
}

export default Card
