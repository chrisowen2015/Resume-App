'use client';

import { useState } from 'react';
import { Box, Fab, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";


export default function NavButtons() {
    const [value, setValue] = useState(0);

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
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <Fab color="primary" href="/" >
                        <Home fontSize="large" />
                    </Fab>
                    <Fab color="primary" sx={{ margin: 3 }} href="/" >
                        <Person fontSize="large" />
                    </Fab>
                    <Fab color="primary" href="/" >
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
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={100}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{ paddingBottom: '1em' }}
                    >
                        <BottomNavigationAction label="Home" icon={<Home fontSize='large' />} />
                        <BottomNavigationAction label="About Me" icon={<Person fontSize='large' />} />
                        <BottomNavigationAction label="Contact Me" icon={<Mail fontSize='large' />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    )
}