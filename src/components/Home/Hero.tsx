"use client";
import "./home.css";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import LinkIcon from '@mui/icons-material/Link';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header/Header';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface Hero {
    onStartMeeting: () => void;
    genErateRooms: any;
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '0.5rem',
};

const Hero: React.FC<Hero> = ({ onStartMeeting, genErateRooms }) => {
    const images = [
        {
            id: 1,
            img: 'https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg',
            texts: 'qaaaaaaaaaaaaa',
        },
        {
            id: 2,
            img: 'https://img.freepik.com/vecteurs-premium/programmeur-code-chat-livre-illustration-clipart-vectoriel-cafe_138676-92.jpg?w=900',
            texts: 'bbbbbbbbbbbb',
        },
        {
            id: 3,
            img: 'https://img.freepik.com/vecteurs-libre/illustration-concept-lecteur-cassettes_114360-6390.jpg?t=st=1691131057~exp=1691131657~hmac=63c55b8b7b587e3c42ba8950a69e464f9adcfa2ecf0b76f21a14783d33780d27',
            texts: 'qqqqqqqqqqqqqq',
        },
        {
            id: 4,
            img: 'https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg',
            texts: 'eeeeeeeeeeeeeeeeeeeee',
        },
        {
            id: 5,
            img: 'https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg',
            texts: 'eeeeeeeeeeeeeeeeeeeee',
        },
        // Add other image URLs here
    ];
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const [isLoading, setLoading] = useState<Boolean>(false);

    const handleOpen = () => {
        setOpen(true)
        handleClosed()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event: any) => {
        const { value } = event.target;
        setInputValue(value);
    };
    const shouldShowText = /^[A-Za-z0-9]+$/.test(inputValue);
    const [showUl, setShowUl] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleButtonClick = () => {
        setShowUl((prevShowUl) => !prevShowUl);
    };
    const handleWindowClick = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setShowUl(false);
        }
    };
    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);
    const [copied, setCopied] = useState('');
    const copyText = () => {
        const textToCopy = genErateRooms();
        navigator.clipboard.writeText(textToCopy)
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosed = () => {
        setAnchorEl(null);
    };

    const opend = Boolean(anchorEl);
    const id = opend ? 'simple-popover' : undefined;

    return (
        <main>
            <Header />
            <div className="flex items-center hero">
                <div className="hero__left items-start">
                    <div className="hero__featureText">
                        <h1 className="hero__title">
                            การประชุมทางวิดีโอแบบพรีเมียม ตอนนี้ใช้งานได้ฟรีสำหรับทุกคน
                        </h1>
                        <p className="hero__subtitle">
                            เราได้ออกแบบบริการที่เราสร้างขึ้นมาสำหรับการประชุมทางธุรกิจที่ปลอดภัยอย่าง Google Meet ให้เป็นบริการที่ไม่มีค่าใช้จ่ายและใช้งานได้สำหรับทุกคน                    </p>
                    </div>

                    <div className="hero__buttons flex justify-start items-center gap-7 mb-5">
                        <div>
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}
                                className="bg-[rgb(26,115,232)] text-white text-[1rem] whitespace-nowrap p-2 pl-4 pr-4 h-[3em] rounded-[0.25em]"
                            >
                                <VideoCallOutlinedIcon />
                                <span>การประชุมใหม่</span>
                            </Button>

                            <Popover
                                id={id}
                                open={opend}
                                anchorEl={anchorEl}
                                onClose={handleClosed}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 2 }} className="hover:bg-[#efefef]" onClick={handleOpen} >
                                    <LinkIcon className='mr-2 text-lg' />
                                    <span>สร้างประชุมไว้ใช้ภายหลัง</span>
                                </Typography>
                                <Typography sx={{ p: 2 }} className="hover:bg-[#efefef]" onClick={onStartMeeting}
                                >
                                    <AddIcon className='mr-2 text-lg' />
                                    <span>เริ่มประชุมทันที</span>
                                </Typography>
                                <Typography sx={{ p: 2 }} className="hover:bg-[#efefef]"
                                >
                                    <CalendarTodayIcon className='mr-2 text-lg' />
                                    <span>กำหนดเวลาใน Google ปฏิทิน</span>
                                </Typography>
                            </Popover>
                        </div>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" >
                                    นี่คือลิงก์ไปยังการประชุมของคุณ
                                </Typography>
                                <div className={`min-h-[9.375rem] ${isLoading ? 'flex justify-center items-center' : ''}`}>
                                    {isLoading ? (
                                        <div >
                                            <CircularProgress />
                                        </div>
                                    ) : (
                                        <div>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                คัดลอกลิงก์นี้แล้วส่งให้ผู้ที่คุณต้องการประชุมด้วย อย่าลืมบันทึกเก็บไว้สำหรับใช้ภายหลังด้วย
                                            </Typography>
                                            <div className='pl-3  bg-[rgb(241,243,244)] mt-4 text-[rgb(95,99,104)] rounded-[4px] flex justify-between items-center'>
                                                <p>
                                                    {genErateRooms()}
                                                </p>
                                                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2' onClick={copyText} >
                                                    <ContentCopyIcon className="text-[rgb(95,99,104)]" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Box>

                        </Modal>

                        <div className="relative inline-block border rounded-sm">
                            <input
                                type="text"
                                className="pl-10 h-[3em] rounded-[0.25em]"
                                placeholder="ป้อนรหัสหรือลิงก์"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <span className="icon absolute">
                                <KeyboardIcon />
                            </span>
                        </div>
                        {inputValue !== '' && (shouldShowText ? (
                            <p className="text-[rgb(26,115,232)] cursor-pointer" onClick={onStartMeeting}>เข้าร่วม</p>
                        ) : (
                            <p className="text-[rgb(218,220,224)]">เข้าร่วม</p>
                        ))}
                    </div>
                    <Divider />
                    <p className="hero__learnMore ">
                        <span className='text-blue-500'>
                            <Link href="#" className='pr-1'>ดูข้อมูลเพิ่มเติม</Link>
                        </span>
                        เกี่ยวกับ Google Meet
                    </p>
                </div>

                <div className='hero__right'>
                    <div className="flex justify-center items-center bg-white w-full h-auto gap-5 ">
                        <button onClick={handlePrev} className="bg-transparent p-2 hover:bg-[#efefef] rounded-full">
                            <NavigateBeforeOutlinedIcon className={`${currentIndex === 0 ? 'text-[rgba(0,0,0,.38)]' : 'rgba(60,64,67,.38)'}`} />
                        </button>
                        <img
                            className="hero__image rounded-full"
                            src={images[currentIndex].img}
                            alt={images[currentIndex].texts}
                        />
                        <button onClick={handleNext} className="bg-transparent p-2 hover:bg-[#efefef] rounded-full">
                            <NavigateNextOutlinedIcon className={`text-[${currentIndex === images.length - 1 ? 'rgba(0,0,0,.38)]' : 'rgba(60,64,67,.38)'}`} />
                        </button>
                    </div>
                    <div className='mt-4'>
                        <p >{images[currentIndex].texts}</p>
                        <span>
                            คลิก <strong>การประชุมใหม่</strong> เพื่อกำหนดการประชุมใน Google ปฏิทินและส่งคำเชิญให้ผู้เข้าร่วม
                        </span>
                    </div>
                    <div className="flex justify-center mt-4 ">
                        {images.map((_, index) => (
                            <FiberManualRecordIcon key={index} className={`h-[0.7rem] ${currentIndex === index ? 'text-[rgb(26,115,232)]' : 'text-[rgba(60,64,67,.38)] '} `} />
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Hero;