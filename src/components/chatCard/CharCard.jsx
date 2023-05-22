import React from 'react'

const CharCard = () => {
  return (
    <div className='flex items-center justify-center py-2 group cursor-pointer h-[9vh]'>
        <div className='w-[20%]'>
            <img className='h-14 w-14 rounded-full ms-2' src="https://cdn.pixabay.com/photo/2023/05/03/12/45/bird-7967577_1280.jpg" alt="" />
        </div>
        <div className='pl-5 w-[80%]'>
            <div className='flex justify-between items-center'>
                <p className='text-lg'>Username</p>
                <p className='text-sm'>today</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>message...</p>

                <div className='flex space-x-2 items-center'>
                    <p className='text-xs py-1 px-2 text-white bg-green-500 rounded-full'>5</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CharCard