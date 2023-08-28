import React, { useEffect, useRef, useState } from 'react';
import './participant.css'

interface ParticipantProps {
    stream: MediaStream | null;
    showProfilePicture: boolean;
    data: any;
}
``
const Participant: React.FC<ParticipantProps> = ({ stream, showProfilePicture, data }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = showProfilePicture ? null : stream;
            videoRef.current.muted = true;
        }
    }, [stream, showProfilePicture]);

    return (
        <div className={`${data > 1 && showProfilePicture ? 'bg-black h-full' : ''} participant  w-full h-full`}>
            {showProfilePicture ? (
                <div className='bg-green-600 p-3'>
                    {data}
                </div>
            ) : (
                <video
                    ref={videoRef}
                    autoPlay
                    style={{ transform: 'scale(-1, 1)', width: '100%', height: '100%', borderRadius: '5px' }}
                ></video>
            )}
        </div>
    );
};

export default Participant;