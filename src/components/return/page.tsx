"use client";
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import DevicesIcon from '@mui/icons-material/Devices';
import './accept.css'
import Header from '../Header/Header';
import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Participant from '../Participant/Participant';

interface join {
    joinAgain : () => void;
}

const Accept: React.FC<join>  = ({ joinAgain }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <Header />
            <div className='main'>
                <div className='content'>
                    <div className='space-y-5'>
                        <div className='inside left'>
                            <div className='mb-3'>
                                <img
                                    src="https://img.freepik.com/pho tos-gratuite/employe-demarrage-parlant-par-appel-video-dans-bureau-festif-se-reunissant-chat-videoconference-ligne-dans-espace-decore-ornements-noel-femme-discutant-par-teleconference-distance_482257-50710.jpg?w=1060&t=st=1691654715~exp=1691655315~hmac=6a24779e609c467413367dab55581ea1194e2e753a9b8d53ec51a04e3c60eded"
                                    alt=""
                                />
                            </div>
                            <div className='flex space-x-5'>
                                <Box sx={{ minWidth: 150 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">aaa</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            className='border rounded-3xl'
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 150 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">asdasdasd</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            className='border rounded-3xl'
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 150 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">aaaaaaa</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            className='border rounded-3xl'
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>

                    </div>
                    <div className='right inside '>
                        <div className='text-center space-y-5'>
                            <div className='space-y-5'>
                                <h1 className='text-3xl'>พร้อมไหมที่จะเข้าร่วม</h1>
                                <p className='text-base'>ไม่มีใครอยู่เลย</p>
                            </div>

                            <div className='flex justify-center items-center gap-2'>
                                <button className='bg-[#1a73e8] p-2 rounded-3xl px-4 text-white box-shadow-btn' onClick={joinAgain }>เข้าร่วมเลย</button>
                                <button className='bg-white p-2 rounded-3xl px-4 border text-[#1a73e8] box-shadow-btn'>
                                    <PresentToAllIcon className='' />
                                    นำเสนอ
                                </button>
                            </div>

                            <div className='space-y-5'>
                                <p>ตัวเลือกการเข้าร่วมอื่นๆ</p>
                                <p className='text-[#1a73e8]'> <DevicesIcon /> ใช้โหมดแยกหน้าจอประชุม</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accept