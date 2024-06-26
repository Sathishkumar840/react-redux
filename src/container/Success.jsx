import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const[count,setCount]=useState(15);
    const navigate=useNavigate();
    useEffect(()=>{
        setInterval(()=>setCount((count)=> count-1),1000);

        setTimeout(()=>{
            navigate("/");
        },15000);
    },[navigate]);
  return (
   <h4>Your order have been palced successfully.You will be redirected in {count} seconds</h4>
  )
}

export default Success