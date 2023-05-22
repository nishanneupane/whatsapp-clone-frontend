import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { BsArrowLeft, BsCheck2 } from 'react-icons/bs'

const NewGroup = () => {
    const [isImageUploading,setIsImageUploading]=useState(false);
    const [groupName,setGroupName]=useState("")
    return (
        <div className='w-full h-full'>

            <div className='flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold' />
                <p className='text-xl font-semibold'>New Group</p>
            </div>

            <div className='flex flex-col justify-center items-center my-12'>
                <label htmlFor="imageInput" className='relative'>
                    <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="" className='h-13 w-13' style={{
                        height:"210px",
                        width:"210px",
                        borderRadius:"50%",
                        boxShadow:"4px 4px 10px 2px gray"
                    }}/>
                    {
                        isImageUploading&&<CircularProgress className='absolute top-[5rem] left-[6rem]'/>
                    }
                </label>
                <input type="file" id='imageInput'
                className='hidden'
                onChange={()=>console.log("imageOnChange")}
                />

            </div>

            <div className="w-full flex justify-between items-center py-2 px-5">
                <input type="text" onChange={(e)=>setGroupName(e.target.value)}  className='w-full outline-none border-b-2 border-green-700 px-2 bg-transparent' placeholder='Group Subject' value={groupName}/>
            </div>

            {
                groupName&&<div className='py-10 bg-slate-200 flex items-center justify-center'>
                    <Button>
                        <div className='bg-[#0c977d] rounded-full p-4'>
                            <BsCheck2 className='text-white font-bold text-3xl'/>
                        </div>
                    </Button>
                </div>
            }
        </div>
    )
}

export default NewGroup