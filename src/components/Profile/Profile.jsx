import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2, BsNodeMinusFill, BsPencil } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Profile = ({handleCloseOpenProfile}) => {
    const navigate = useNavigate();
    const [username,setUsername]=useState(null);


    const [flag,setFlag]=useState(false);

    const handleFlag=()=>{
        setFlag(true);
    }

    const handleCheckClick=()=>{
        setFlag(false);
    }

    const handleChange=(e)=>{
        setUsername(e.target.value);
    }
    return (
        <div className='w-full h-full shadow-sm'>
            <div className='flex items-center space-x-10 bg-[#008069] text-white pt-4 px-10 pb-2'>
                <BsArrowLeft onClick={handleCloseOpenProfile} className='cursor-pointer text-2xl font-bold' />
                <p className='cursor-pointer font-semibold pt-3'>Profile</p>
            </div>

            {/* update profile pic */}
            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor="imageInput">
                    <img src="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg" className='w-[13vw] h-[13vw] cursor-pointer rounded-full' alt="" />
                </label>

                <input type="file" id='imageInput' className='hidden' />
            </div>

            {/* name  section */}
            <div className='bg-white px-3'>
                <p className='py-1'>Your name</p>

                {
                    !flag&&<div className='w-full flex justify-between items-center'>
                    <p className='py-1'>{username||"username"}</p>
                    <BsPencil className='cursor-pointer'  onClick={handleFlag}/>
                </div>
                }
                {
                    flag&&<div className='w-full flex justify-between items-center py-2'>
                        <input type="text" placeholder='Enter your name' 
                        className='w-[80%] outline-none border-b-2 border-blue-700 p-2'
                        onChange={handleChange}
                        />
                        <BsCheck2 className='cursor-pointer text-2xl' onClick={handleCheckClick}/>
                    </div>
                }

            </div>

            <div className='px-3 my-10 bg-gray-200 h-20'>
                <p className='py-1'>this is not your username , this name will be visible to your whatsapp contacts.</p>
            </div>

        </div>
    )
}

export default Profile