'use client';

import { Box, Fab, Typography } from "@mui/material";
import Image from "next/image";
import Spacer from "../shared/spacer";

import { Download } from "@mui/icons-material";

export default function Home() {
    var height = 'calc(100vh - 80px)';

    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'space-between', }}>
                <div style={{ width: '40%', position: 'relative', margin: '50px 0 50px 50px' }}>
                    <Image src="/images/chris-owen.jpg"
                        objectFit="cover"
                        alt="Chris Owen"
                        fill
                        priority
                        style={{ borderRadius: 50 }}
                    />
                </div>
                <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ maxWidth: '700px', display: 'flex', justifyContent: "center", alignItems: 'center', padding: '5em' }}>
                        <Box>
                            <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
                                I'M CHRIS OWEN
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                SOFTWARE DEVELOPER
                            </Typography>

                            <Spacer height={40} />

                            <Typography variant="h6" >
                                I'm a Los Angeles based software developer with a passion for creating beautiful, functional, and accessible web applications.
                                I am passionate about learning new technologies and working with others to create amazing products.
                            </Typography>

                            <Spacer height={40} />

                            <Fab variant="extended" color="primary" sx={{ p: 4, borderRadius: 10 }} >
                                <Typography variant="h6">
                                    Download Resume &nbsp;
                                </Typography>
                                <Download fontSize="large" />
                            </Fab>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}