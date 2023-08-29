
"use client";
import './room.css'
import React, { use, useState } from 'react';
import Control from '@/components/Controls/Controls'
import Video from '@/components/Video/Video'
import Accept from '../../components/return/page';
import Back from '@/components/Back/Back';
import { useRouter } from 'next/navigation'

type Props = {};

export default function Report({ }: Props) {
    const router = useRouter()
    const [leaveMeeting, setLeaveMeeting] = useState(true);
    const [shouldShowAccept, setShouldShowAccept] = useState(false);
    const [returnCame, setReturnCame] = useState(false)
    const [returnMic, setReturnMic] = useState(false)
    const [openSide, setOpenSite] = useState('')

    const open_Sidebar = (e: any) => {
        setOpenSite(e)
    }
    const pushCamera = (e: any) => {
        setReturnCame(e)
    }
    const pushMic = (e: any) => {
        setReturnMic(e)
    }
    const handleLeaveMeeting = () => {
        setLeaveMeeting(false);
    };
    const leaveJoins = () => {
        router.push(`/`)
    };
    const goBackInHistory = () => {
        handleLeaveMeeting();
        setShouldShowAccept(true);
    };
    const joinAgain = () => {
        setLeaveMeeting(true)
        setShouldShowAccept(false);
    };
    const renderContent = () => {
        if (!shouldShowAccept) {
            if (leaveMeeting) {
                return (
                    <div className="wrapper">
                        <div className="main-screen">
                            <Video closeCamera={returnCame} closeMic={returnMic} openSide={openSide} />
                        </div>
                        <div className="footer">
                            <Control onLeaveMeeting={handleLeaveMeeting} disConnected={leaveJoins} pushCamera={pushCamera} pushMic={pushMic} open_Sidebar={open_Sidebar} />
                        </div>
                    </div>
                );
            } else {
                return <Back goHistory={goBackInHistory} leaveJoin={leaveJoins} />;
            }
        } else {
            return <Accept joinAgain={joinAgain} />;
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
}