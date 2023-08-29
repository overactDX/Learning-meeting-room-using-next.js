import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {
    Box,
    TextField,
    Grid,
    Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const drawerWidth = 340;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

interface CustomDrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
    openSide: string;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ open, handleDrawerClose, openSide }) => {
    const theme = useTheme();
    const router = window.location?.host + window.location?.pathname;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(router);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const translateOpenSide = (openSide: any) => {
        console.log(openSide);
        if (openSide === 'info') {
            return 'รายละเอียดการประชุม';
        } else if (openSide === 'roomMember') {
            return 'บุคคล';
        } else if (openSide === 'chat') {
            return 'ข้อความในสาย';
        } else if (openSide === 'setting') {
            return 'กิจกรรม';
        } else if (openSide === 'locket') {
            return 'ตัวควบคุมของผู้จัด';
        }
        return openSide;
    };

    useEffect(() => {
    }, [openSide]);

    const messages = [
        { id: 1, text: "Hi there!", sender: "bot" },
        { id: 2, text: "Hello!", sender: "user" },
        { id: 3, text: "How can I assist you today?", sender: "bot" },
    ];

    const [input, setInput] = React.useState("");

    const handleSend = () => {
        if (input.trim() !== "") {
            console.log(input);
            setInput("");
        }
    };
    const handleInputChange = (event: any) => {
        setInput(event.target.value);
    };

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    height: '85%',
                    marginTop: '35px',
                    marginRight: '10px',
                    borderRadius: '10px',
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader className='flex justify-between p-4'>
                <p className='pl-2'>{translateOpenSide(openSide)} </p>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <CloseOutlinedIcon /> : <CloseOutlinedIcon />}
                </IconButton>
            </DrawerHeader>

            {(openSide === 'info' &&
                <div className='p-4 space-y-2'>
                    <h1>ข้อมูลการเข้าร่วม</h1>
                    <p>{router}</p>
                    <div className='rounded-full cursor-pointer hover:bg-[#efefef] p-2 flex gap-3' onClick={handleCopy}>
                        <ContentCopyIcon className="text-[rgb(95,99,104)]" />
                        <p>คัดลอกข้อมูลการเข้าร่วม</p>
                    </div>
                    <Divider />
                    <p className='text-center'>ไฟล์แนบของ Google ปฎิทินจะปรากฏที่นี่</p>
                </div>
            )}

            {(openSide === 'roomMember' &&
                <div className='p-3'>
                    <b
                        className="bg-[#e8f0fe] text-white text-[1rem] whitespace-nowrap p-2 pl-4 pr-4 h-[3em] rounded-[0.25em]"
                    >
                        <span className='text-[rgb(25,103,210)]'>การประชุมใหม่</span>
                    </b>

                    <input type="text" placeholder='Search....' />

                    <span>อยู่ในการประชุมแล้ว</span>

                    <div className='p-3 border'>
                        <h3>ผู้มีส่วนร่วม</h3>
                        <div className='flex gap-3'>
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: deepPurple[500], width: 38, height: 38 }}>OP</Avatar>
                            </Stack>
                            <div>
                                <p>Jame</p>
                                <span>ผู้จัดการประชุม</span>
                            </div>
                        </div>
                    </div>

                </div>)}

            {(openSide === 'chat' && <div>
                <Box
                    sx={{
                        height: "75vh",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                        {messages.map((message) => (
                            <Message key={message.id} message={message} />
                        ))}
                    </Box>
                    <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    placeholder="Type a message"
                                    variant="outlined"
                                    value={input}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={handleSend}
                                >
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>)}

            {(openSide === 'setting' && <div>
                {/* แสดงเนื้อหาสำหรับ 'roomMember' */}
            </div>)}

            {(openSide === 'locket' && <div>
                {/* แสดงเนื้อหาสำหรับ 'roomMember' */}
            </div>)}

        </Drawer>
    );
};

export default CustomDrawer;


const Message = (message: any) => {
    const isBot = message?.sender === "bot";
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isBot ? "flex-start" : "flex-end",
                mb: 2,
            }}
        >
            <Paper
                variant="outlined"
                sx={{
                    p: 1,
                    backgroundColor: isBot ? "primary.light" : "secondary.light",
                }}
            >
                <Typography variant="body1">{message?.text}</Typography>
            </Paper>
        </Box>
    );
};