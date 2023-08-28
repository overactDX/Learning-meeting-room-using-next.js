"use client";
import React, { useEffect, useState } from 'react'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallEndIcon from '@mui/icons-material/CallEnd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';


interface TEST {
    onLeaveMeeting: () => void;
    disConnected: () => void;
    pushCamera: (e: any) => void;
    pushMic: (e: any) => void;
    open_Sidebar: (e: any) => any;
}

const Footer: React.FC<TEST> = ({ onLeaveMeeting, disConnected, pushCamera, pushMic, open_Sidebar }) => {
    const [currentTime, setCurrentTime] = useState<string>(getTimeString());
    const [camera, setCamera] = useState(false)
    const [mic, setMic] = useState(false)

    const videoCall = () => {
        setCamera(!camera)
    }
    const micCall = () => {
        setMic(!mic)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getTimeString());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const switchCamera = () => {
        pushCamera(camera);
        videoCall();
    }

    const switchMic = () => {
        pushMic(mic)
        micCall()
    }

    const openSide = (item: string) => {
        open_Sidebar(item);
    }

    return (
        <>
            <section className="p-[1.01rem] bg-[#3c4043]">
                <div className="mx-auto px-2">
                    <div className="text-center flex items-center justify-between ">
                        <div className="flex items-center justify-start text-white mr-14">
                            <p>{currentTime}</p>
                            <span className='ml-3'>|</span>
                            <p className=" text-sm  ml-3 ">pwc-ceig-pjv</p>
                        </div>
                        <div className="items-center mt-0 flex justify-end">
                            <ul className="flex items-center justify-center space-x-3">
                                <li className='rounded-full cursor-pointer p-2 bg-[#3c4043] hover:bg-[#5a5d5f]' onClick={switchMic}>
                                    {mic ? (
                                        <MicNoneOutlinedIcon className="text-white" />

                                    ) : (
                                        <MicOffOutlinedIcon className="text-white" />
                                    )}
                                </li>
                                <li className='rounded-full cursor-pointer p-2 bg-[#3c4043] hover:bg-[#5a5d5f]' onClick={switchCamera}>
                                    {camera ? (
                                        <VideocamOutlinedIcon className="text-white" />
                                    ) : (
                                        <VideocamOffOutlinedIcon className="text-white" />
                                    )}
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2 bg-[#3c4043]'>
                                    <ClosedCaptionOffOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2 bg-[#3c4043]'>
                                    <MoodOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2 bg-[#3c4043]'>
                                    <PresentToAllOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2 bg-[#3c4043]'>
                                    <BackHandOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2 bg-[#3c4043]'>
                                    <MoreVertIcon className="text-white" />
                                </li>
                                <li className='rounded-3xl cursor-pointer hover:bg-[rgb(229,94,82)] p-2 px-4 bg-[rgb(234,67,53)]' onClick={onLeaveMeeting}>
                                    <CallEndIcon className="text-white" />
                                </li>
                            </ul>
                        </div>
                        <div className="items-center mt-0 flex justify-end">
                            <ul className="flex items-center justify-end space-x-1">
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2' onClick={() => openSide('info')}>
                                    <InfoOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2' onClick={() => openSide('roomMember')}>
                                    <GroupOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2' onClick={() => openSide('chat')}>
                                    <ChatOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2' onClick={() => openSide('setting')}>
                                    <CategoryOutlinedIcon className="text-white" />
                                </li>
                                <li className='rounded-full cursor-pointer hover:bg-[#5a5d5f] p-2' onClick={() => openSide('locket')}>
                                    <LockPersonOutlinedIcon className="text-white" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >


        </>
    )
}

export default Footer

function getTimeString() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}