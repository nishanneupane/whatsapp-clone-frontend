import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { TbCircleDashed } from "react-icons/tb"
import { AiOutlineSearch } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDots, BsThreeDotsVertical } from "react-icons/bs"
import { ImAttachment } from "react-icons/im"
import CharCard from './chatCard/CharCard'
import MessageCard from './MessageCard/MessageCard'
import "./HomePage.css";
import Profile from './Profile/Profile'
import { Button, Menu, MenuItem } from '@mui/material'
import CreateGroup from './Group/CreateGroup'
const HomePage = () => {
    const [Querys, setQuerys] = useState(null);
    const navigate = useNavigate();
    const handleSearch = () => {

    }

    const [currentChat, setCurrentChat] = useState(null);
    const [content, setContent] = useState(null);
    const [anchorEl, setAnchorE1] = useState(null)
    const open = Boolean(anchorEl);
    const [isGroup,setIsGroup]=useState(false);

    const handleClickChatCard = () => {
        setCurrentChat(true);
    }

    const handleCreateNewMessage = () => {

    }

    const [isProfile, setIsProfile] = useState(false);

    const handleNavigate = () => {
        //navigate("/profile");
        setIsProfile(true);
    }

    const handleCloseOpenProfile = () => {
        setIsProfile(false);
    }

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorE1(null);
    }

    const handleCreateGroup=()=>{
        setIsGroup(true);
    }
    return (
        <div className='relative'>
            <div className='top-0 py-14 bg-[#00a884] w-full -z-20'>
            </div>
            <div className='flex bg-[#f0f2f5] h-[90vh] absolute top-[5vh] left-[2vw] w-[96vw]'>
                <div className='left w-[30%] h-full bg-[#e8e9ec]'>
                    {/* profile */}
                    {isGroup&&<CreateGroup/>}
                    {isProfile && <div className='w-full h-full'><Profile handleCloseOpenProfile={handleCloseOpenProfile} /></div>}

                    {
                        !isProfile &&!isGroup&&
                        <div className="w-full">

                            {/* home */}
                            <div className='flex justify-between items-center px-3 py-3'>
                                <div className='flex items-center space-x-3' onClick={handleNavigate}>
                                    <img className='rounded-full w-10 h-10 cursor-pointer'
                                        src="https://cdn.pixabay.com/photo/2023/04/13/14/28/flower-7922648_1280.jpg" alt="" />
                                    <p>Username</p>
                                </div>
                                <div className='space-x-3 text-2xl flex'>
                                    <TbCircleDashed className='cursor-pointer' onClick={() => navigate("/status")} />
                                    <BiCommentDetail />

                                    <div>


                                        <BsThreeDotsVertical className='cursor-pointer'
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />

                                        <Menu
                                            id='basic-menu'
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': "basic-button"
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                                            <MenuItem onClick={handleClose}>Loggout</MenuItem>
                                        </Menu>
                                    </div>

                                </div>
                            </div>

                            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                                <input type="text" className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2'
                                    placeholder='Search or start new chat'
                                    onChange={(e) => {
                                        setQuerys(e.target.value)
                                        handleSearch(e.target.value)
                                    }}
                                    value={Querys}
                                />
                                <AiOutlineSearch className='left-6 top-9 absolute' />
                                <div>
                                    <BsFilter className='ml-4 text-3xl' />
                                </div>
                            </div>
                            {/* all user */}
                            <div className='scrollbar bg-white overflow-y-scroll h-[70vh] px-3'>
                                {
                                    Querys && [1, 1, 1, 1].map((item) =>
                                        <div onClick={handleClickChatCard}>
                                            {""}
                                            <hr />
                                            <CharCard />
                                        </div>
                                    )
                                }


                            </div>

                        </div>}
                </div>
                {/* default whatsapp page */}

                {
                    !currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
                        <div className='max-w-[70%] text-center'>
                            <img src="https://cdn.pixabay.com/photo/2017/05/05/23/39/whatsapp-2288548_1280.png" className=' rounded-full w-[70%] flex items-center justify-center ms-14'/>
                            <h1 className='text-4xl text-gray-600'>whatsapp web</h1>
                            <p className='my-9 text-sm'>send and revice your message without keeping your phone online. Use whatsapp on upto 4 linked devices and 1 phone at the same time</p>
                        </div>

                    </div>
                }

                {/* message part */}
                {
                    currentChat && <div className='w-[70%] relative'>
                        <div className='header top-0 w-full absolute bg-[#f0f2f5]'>
                            <div className='flex justify-between w-full'>
                                <div className='py-3 space-x-4 flex items-center px-3'>
                                    <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/03/12/45/bird-7967577_1280.jpg" alt="" />
                                    <p>Username</p>
                                </div>
                                <div className='flex py-3 space-x-4 items-center px-3'>
                                    <AiOutlineSearch />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>

                            {/* message section */}
                            <div className='scrollbar px-10 h-[70vh] overflow-y-scroll bg-blue-50'>
                                <div className='space-y-1 flex flex-col justify-center mt-2 py-2'>
                                    {
                                        [1, 1, 1, 1, 1].map((item, i) => <>
                                            <MessageCard content={"message"} isReqUserMessage={i % 2 == 0} />
                                        </>)
                                    }
                                </div>
                            </div>

                            {/* footer section */}
                            <div className='footer bg-[#f0f2f5] bottom-0 w-full py-3 text-xl'>
                                <div className='flex justify-between items-center px-5 relative'>
                                    <BsEmojiSmile className='cursor-pointer' />
                                    <ImAttachment />
                                    <input className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
                                        type="text" onChange={(e) => setContent(e.target.value)}
                                        placeholder='Type Message'
                                        value={content}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                handleCreateNewMessage();
                                                setContent("")
                                            }
                                        }}
                                    />
                                    <BsMicFill />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage