import React from 'react'
import {useNavigate} from "react-router-dom"

const StatusUserCard = () => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/status/{userId}`);
    }
  return (
    <div className='flex items-center p-3 cursor-pointer' onClick={handleNavigate}>
        <div>
            <img className='h-7 w-7 lg:w-10 lg:h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/01/30/09/14/rain-7755142_640.png" alt="" />
        </div>
        <div className='ml-2 text-white'>
            <p>nishan neupane</p>
        </div>
    </div>
  )
}

export default StatusUserCard