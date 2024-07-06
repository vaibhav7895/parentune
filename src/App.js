import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import { FaLock } from "react-icons/fa";
function App() {
  const[plans,setPlan]= useState([])
  

  useEffect(() => {
   axios.get("https://qa7.parentune.com/api/subscription/subscribe/v2/plans")
   .then((res)=>{
    // console.log(res.data.data)
    setPlan(res.data.data)
   })
  },[])

 console.log(plans)
  
  return (
   <div className='flex'>
     {plans.map((plan)=>(
      <div key={plan.id} className='w-[30vw] m-auto p-10'>
        <h1> Choose your plan</h1>
        <img src= {`${plan.banner}`}  alt="image banner" className=" w-72 m-auto"/>
        <div className='flex flex-direction:column m-[10px] flex justify-center items-center bg-cyan-500 rounded-lg min-h-16'>
        <h1 className='font-light text-[8px] absolute top-[230px] '>{plan.tagged_as}</h1>
          <div>
          <h1>{plan.plan_name}</h1>
          <h1 className='text-[8px] text-center'>Rs{plan.cost_per_day}/day</h1>
          </div>
         
        </div>
        <div className='w-[200px]'>
          <h1 className=''>{plan.claims}</h1>
        </div>
        <ul>
          {plan.description.data_monthly.map((item,index)=>(
            
            <li key={index} className={item.isLocked==='True'?'locked':"" } ><span><FaLock/></span>{item.text}</li>
          ))}
        </ul>
        <button className='bg-blue-500 p-2 rounded-lg w-full text-white'>Choose plan</button>
      </div>

     ))}
   </div>
  );
}

export default App;
