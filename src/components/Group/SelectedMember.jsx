import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const SelectedMember = ({ handleRemoveMember, member }) => {
    return (
        <div className='flex items-center bg-slate-300 rounded-full'>
            <img src="https://images.pexels.com/photos/16534564/pexels-photo-16534564/free-photo-of-landscape-field-animal-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-7 h-7 rounded-full' />
            <p className='px-2'>Username</p>
            <AiOutlineClose onClick={handleRemoveMember} className='pr-1 cursor-pointer' />
        </div>
    );
}

export default SelectedMember;
