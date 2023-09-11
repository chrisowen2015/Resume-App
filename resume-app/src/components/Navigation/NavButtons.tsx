'use client';

import { useState } from 'react';
import { Box, Fab, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";

import { useTheme } from '@mui/material';

import { usePathname } from 'next/navigation';

export default function NavButtons() {
    const pathName = usePathname();
    const [value, setValue] = useState(pathName === '/' ? 0 : pathName === '/about' ? 1 : 2);
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                }
            }}>
                <Box sx={{ height: '100vh', position: 'fixed', right: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Fab href="/" sx={{ backgroundColor: (value == 0 ? theme.palette.primary.main : theme.palette.action.disabled) }} >
                        <Home fontSize="large" />
                    </Fab>
                    <Fab href="/about" sx={{ margin: 3, backgroundColor: (value == 1 ? theme.palette.primary.main : theme.palette.action.disabled) }}>
                        <Person fontSize="large" />
                    </Fab>
                    <Fab href="/contact" sx={{ backgroundColor: (value == 2 ? theme.palette.primary.main : theme.palette.action.disabled) }}>
                        <Mail fontSize="large" />
                    </Fab>
                </Box>
            </Box>

            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'none',
                    lg: 'none',
                    xl: 'none',
                }
            }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={20}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ paddingBottom: '1em' }}
                    >
                        <BottomNavigationAction label="Home" icon={<Home fontSize='large' />} href="/" />
                        <BottomNavigationAction label="About Me" icon={<Person fontSize='large' />} href="/about" />
                        <BottomNavigationAction label="Contact Me" icon={<Mail fontSize='large' />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    )
}