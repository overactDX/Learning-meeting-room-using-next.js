"use client";
import React, { useState, useEffect } from 'react';
import Home from '@/components/Home/Hero';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation'

const IndexPage = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState<Boolean>(false);

  const handleStartMeeting = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const roomId = Math.floor(Math.random() * 1000);
      router.push(`/${roomId}`)
    }, 2000);
  };

  const generateRoom_Id = () => {
    const roomId = Math.floor(Math.random() * 1000);
    return roomId.toString();
  }

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <CircularProgress />
          <h1 className="loading_text">Loading...</h1>
        </div>
      ) : (
        <div>
          <Home onStartMeeting={handleStartMeeting} genErateRooms={generateRoom_Id} />
        </div>
      )}
    </>
  );
};

export default IndexPage;
