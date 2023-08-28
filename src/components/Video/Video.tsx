"use client";
import './video.css'
import React, { useRef, useEffect, useState } from 'react';
import Participant from '../Participant/Participant';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CustomDrawer from '../option_control/Option';

const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean; }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));

interface Camera {
    closeCamera: boolean;
    closeMic: boolean;
    openSide: string;
}

const Camera: React.FC<Camera> = ({ closeCamera, closeMic, openSide }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
    const [imgAdding, setImgAdding] = useState(1);
    const [showProfilePicture, setShowProfilePicture] = useState(true);
    const [dataSlide , setDataSlide ] = useState(openSide)

    useEffect(() => {
        async function setupCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setCameraStream(stream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        }
        setupCamera();
    }, [videoRef]);

    const addImage = () => {
        if (imgAdding < 54) {
            setImgAdding(imgAdding + 1);
        }
    };
    const delelte = () => {
        if (imgAdding > 1) {
            setImgAdding(imgAdding - 1);
        }
    };
    const isMe = true;
    const images = [];
    for (let i = 0; i < imgAdding; i++) {
        const newImage = (
            <div key={i} className={`${closeCamera ? 'flex justify-center items-center' : ''}`}>
                {i !== 0 &&
                    <img
                        src="https://img.freepik.com/free-photo/woman-with-headset-video-call_23-2148854900.jpg"
                        className='w-full h-full rounded-[5px]'
                        alt="Images"
                    />
                }
                {isMe && i === 0 && (
                    <Participant stream={cameraStream} showProfilePicture={closeCamera} data={imgAdding} />
                )}
            </div>
        );
        // เพิ่ม newImage ไปด้านบนของอาเรย์ images
        images.unshift(newImage);
    }

    const gridColOptions = [
        { condition: imgAdding === 1, value: 'p-10 w-[900px]' },
        { condition: imgAdding >= 46, value: 'grid grid-cols-9 w-[1400px] p-10' },
        { condition: imgAdding >= 41, value: 'grid grid-cols-9 w-[1500px] p-10' },
        { condition: imgAdding >= 35, value: 'grid grid-cols-8 w-[1500px] p-10' },
        { condition: imgAdding >= 31, value: 'grid grid-cols-7 w-[1300px] p-10' },
        { condition: imgAdding >= 25, value: 'grid grid-cols-6 w-[1150px] p-10' },
        { condition: imgAdding >= 21, value: 'grid grid-cols-6 w-[1400px] p-10' },
        { condition: imgAdding >= 16, value: 'grid grid-cols-5 w-[1200px] p-10' },
        { condition: imgAdding >= 13, value: 'grid grid-cols-5 w-[1500px] p-10' },
        { condition: imgAdding >= 10, value: 'grid grid-cols-4 w-[1250px] p-10' },
        { condition: imgAdding >= 9, value: 'grid grid-cols-3 w-[1000px] p-10' },
        { condition: imgAdding >= 7, value: 'grid grid-cols-4 w-[1500px] p-10' },
        { condition: imgAdding >= 5, value: 'grid grid-cols-3 w-[1300px] p-10' },
        { condition: imgAdding >= 3, value: 'grid grid-cols-2 w-[960px] p-10' },
        { condition: imgAdding === 2, value: 'grid grid-cols-2 w-[1400px] p-10' },
        { condition: true, value: '' },
    ];
    const gridColsS = gridColOptions.find(option => option.condition)?.value || '';

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (openSide) {
            setOpen(true);
        }
    }, [openSide]);

    const handleDrawerClose = () => {
        setOpen(false); 
        
    };

    return (
        <>
            <Box sx={{ display: 'flex', overflow: 'hidden' }}>
                <Main open={open}>
                    <div className={`${showProfilePicture && imgAdding === 1 ? 'camera flex justify-center items-center' : 'camera'}`}>
                        <div className={`content`}>
                            <div className={`${gridColsS} gap-1 `}>{images}</div>
                        </div>
                    </div>
                </Main>

                <div className='z-10 absolute right-0 top-0'>
                    <button onClick={addImage} className='text-center cursor-pointer bg-red-800 p-2'>
                        เพิ่ม {imgAdding}
                    </button>
                    <button onClick={delelte} className='text-center cursor-pointer bg-orange-600 p-2'>
                        ลบ {imgAdding}
                    </button>
                </div>

                <CustomDrawer open={open} handleDrawerClose={handleDrawerClose} openSide={openSide} /> {/* Use CustomDrawer */}
            </Box>
        </>
    );
};

export default Camera;