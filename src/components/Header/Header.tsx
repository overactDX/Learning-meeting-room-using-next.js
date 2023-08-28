"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import Audio from './Modal/Audio/Audio';
import Router from 'next/router';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (!currentTime) {
    return null;
  }

  const formattedDate = currentTime.toLocaleDateString('th-TH', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = currentTime.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <header className="bg-white">
        <div className="px-6 mx-auto ">
          <nav className="flex items-center justify-between h-16 lg:h-16">
            <div className="flex justify-center items-center">
              <div className='flex-shrink-0'>
                <Image
                  src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
                  alt="google"
                  width={124}
                  height={40}
                />
              </div>
              <p className='text-[#5f6368] ml-1 text-[22px]'>Meet</p>
            </div>


            <div className="flex items-center justify-between">

              <div className='text-[rgb(95,99,104)] text-md mr-8'>
                <span>
                  {formattedTime}
                </span>
                <span> • </span>
                <span>
                  {formattedDate}
                </span>
              </div><div className='space-x-2 mr-8 flex'>
                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2'>
                  <HelpOutlineOutlinedIcon className="text-[rgb(95,99,104)]" />
                </div>

                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2'>
                  <FeedbackOutlinedIcon className="text-[rgb(95,99,104)] " />
                </div>

                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2' onClick={handleOpen}>
                  <SettingsOutlinedIcon className="text-[rgb(95,99,104)]" />
                </div>
                <Audio open={open} onClose={handleClose} />
              </div>

              <div className='space-x-2 flex'>
                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2'>
                  <MenuIcon className="text-[rgb(95,99,104)]" />
                </div>
                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2'>
                  <AccountCircleIcon className="text-[rgb(95,99,104)]" />
                </div>
              </div>

            </div>
          </nav>
        </div >
      </header >
    </>
  )
}

export default Header