"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'


interface Back {
    leaveJoin: () => void;
    goHistory: () => void;
}

const Back: React.FC<Back> = ({ leaveJoin ,goHistory }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const drawCircle = (percent: number) => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = canvas.width / 2 - 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw the circle outline
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + (2 * Math.PI * percent));
            ctx.strokeStyle = '#0099ff';
            ctx.lineWidth = 4;
            ctx.stroke();
            // Draw the countdown text
            ctx.fillStyle = '#';
            // ctx.font = 'bold 18px Arial';
            ctx.font = '13px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(countdown.toString(), centerX, centerY);
        };
        const updateCountdown = () => {
            if (countdown > 0) {
                setCountdown((prevCountdown) => prevCountdown - 1);
                const percentRemaining = countdown / 60;
                drawCircle(percentRemaining);
            } else {
                leaveJoin()
            }
        };
        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, [countdown, leaveJoin , goHistory]);

    return (
        <>
            <section className="bg-white">
                <div className='p-10 flex justify-start items-center space-x-2'>
                    <canvas ref={canvasRef} aria-hidden="true" className="pr-3" width={34} height={34} />
                    <p>กำลังกลับหน้าจอหลัก</p>
                </div>
                <div className=" mx-auto max-w-7xl px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-black  text-3xl">คุณออกจากการประชุมแล้ว</h2>
                    </div>
                    <div className="mt-10">
                        <div className=' flex justify-center items-center space-x-3'>
                            <button className="text-blue-500 border font-bold py-2 px-5 rounded" onClick={goHistory}>
                                เข้าร่วมใหม่
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={leaveJoin}>
                                กลับไปที่หน้าจอหลัก
                            </button>
                        </div>
                        <p className='text-center text-blue-500 mt-5'>
                            ส่งความคิดเห็น
                        </p>
                    </div>
                    <div className='flex justify-center items-center mt-10 '>
                        <div className="w-full max-w-md rounded-xl border bg-white p-4">
                            <div className="flex space-x-4">
                                <div className='w-24 mt-1'>
                                    <img src="https://www.gstatic.com/meet/security_shield_356739b7c38934eec8fb0c8e93de8543.svg" alt="" />
                                </div>
                                <div>
                                    <p className='text-xl'>
                                        การประชุมของคุณปลอดภัย
                                    </p>
                                    <p>
                                        เนื่องจากไม่มีใครเข้าร่วมประชุมได้นอกจากจะได้รับเชิญหรือได้รับอนุญาติจากผู้จัด
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-blue-500 text-end">
                                <Link href="#">ดูข้อมูลเพิ่มเติม</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Back