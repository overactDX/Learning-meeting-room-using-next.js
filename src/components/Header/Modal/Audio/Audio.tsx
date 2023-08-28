import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './audio.css'
import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 650,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '0.5rem', // Add the border-radius property here
};


interface MyModalProps {
    open: boolean;
    onClose: () => void;
}


const Report: React.FC<MyModalProps> = ({ open, onClose }) => {
    const [showEiei1, setShowEiei1] = useState(true);
    const [showEiei2, setShowEiei2] = useState(false);
    const [showEiei3, setShowEiei3] = useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    useEffect(() => {
        setShowEiei1(true);
    }, []);

    const handleToggleEiei1 = () => {
        setShowEiei1(!showEiei1);
        setShowEiei2(false);
        setShowEiei3(false);
    };

    const handleToggleEiei2 = () => {
        setShowEiei2(!showEiei2);
        setShowEiei1(false);
        setShowEiei3(false);
    };

    const handleToggleEiei3 = () => {
        setShowEiei3(!showEiei3);
        setShowEiei1(false);
        setShowEiei2(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <div className='grid grid-cols-3 h-full'>
                        <div className='col-span-1  border-left pr-2 rou'>
                            <h1 className='m-6'>การตั้งค่า</h1>
                            <Button
                                variant="text"
                                className={`btn ${showEiei1 ? 'bg-[#e8f0fe] ' : 'text-[#5f6368]'}`}
                                onClick={handleToggleEiei1}
                            >
                                <SpeakerOutlinedIcon className='mr-2 ml-2' />
                                เสียง
                            </Button>
                            <Button
                                variant="text"
                                className={`btn ${showEiei2 ? 'bg-[#e8f0fe] ' : 'text-[#5f6368]'}`}
                                onClick={handleToggleEiei2}
                            >
                                <VideocamOutlinedIcon className='mr-2 ml-2' />
                                วิดีโอ
                            </Button>
                            <Button
                                variant="text"
                                className={`btn ${showEiei3 ? 'bg-[#e8f0fe] ' : 'text-[#5f6368]'}`}
                                onClick={handleToggleEiei3}
                            >
                                <SettingsOutlinedIcon className='mr-2 ml-2' />
                                ทั่วไป
                            </Button>
                        </div>
                        <div className='col-span-2'>
                            <div className='flex justify-end m-3'>
                                <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2'>
                                    <CloseOutlinedIcon onClick={onClose} />
                                </div>
                            </div>
                            <div className='m-4'>
                                {showEiei1 &&
                                    <div>
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-7'>
                                                <div className='space-y-2'>
                                                    <p>ไมโครโฟน</p>
                                                    <Box sx={{ minWidth: 150 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">aaa</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}
                                                                label="Age"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </div>
                                            </div>
                                            <div className='col-span-4 flex justify-center items-center'>
                                                <div className='flex gap-2 mt-5'>
                                                    <MicNoneOutlinedIcon />
                                                    <div className='text-center text-white rounded-full bg-[#3081ea]' style={{ fontSize: '1rem', height: '1.625em', width: '1.625em', marginLeft: '0.75em' }}>
                                                        !
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-7'>
                                                <div className='pt-6 space-y-2'>
                                                    <p>ลำโพง</p>
                                                    <Box sx={{ minWidth: 150 }}>
                                                        <FormControl fullWidth>
                                                            <InputLabel id="demo-simple-select-label">asdasdasd</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={age}
                                                                label="Age"
                                                                onChange={handleChange}
                                                            >
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </div>
                                            </div>
                                            <div className='col-span-4 flex justify-center items-center'>
                                                <div className='flex gap-2'>
                                                    <VolumeUpOutlinedIcon />
                                                    <div className='text-center text-white rounded-full bg-[#3081ea]' style={{ fontSize: '1rem', height: '1.625em', width: '1.625em', marginLeft: '0.75em' }}>
                                                        !
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {showEiei2 && <div>eiei2</div>}
                                {showEiei3 &&
                                    <div>
                                        eiei3
                                    </div>}
                            </div>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal >
    );
}

export default Report;
