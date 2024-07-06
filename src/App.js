import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import { FaLock } from "react-icons/fa";
import Card from './Components/Card';
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
      {plans.map((plan) => (
        <Card key={plan.id} plan={plan} />
      ))}
    </div>
  );
}

export default App;
