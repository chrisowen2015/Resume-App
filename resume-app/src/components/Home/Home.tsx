import { Box, Fab, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Spacer from "../shared/spacer";
import { HorizontalRule } from "@mui/icons-material";


import { Download } from "@mui/icons-material";

export default function Home() {
    var height = 'calc(100vh - 80px)';

    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'space-between', }}>
                <div style={{ width: '40%', position: 'relative', margin: '50px' }}>
                    <Image src="/images/chris-owen.jpg"
                        alt="Chris Owen"
                        title="Chris Owen - Software Developer"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ borderRadius: 50, objectFit: 'cover' }}
                    />
                </div>
                <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ maxWidth: '700px', display: 'flex', justifyContent: "center", alignItems: 'center', padding: '0em' }}>

                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <HorizontalRule sx={{ fontSize: 60, marginBottom: '1em', marginRight: '10px' }} color="primary" />

                                <Box>
                                    <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
                                        I&apos;M CHRIS OWEN
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                                        SOFTWARE DEVELOPER
                                    </Typography>
                                </Box>
                            </Box>

                            <Spacer height={40} />

                            <Typography variant="h6" >
                                I&apos;m a Los Angeles based software developer with a passion for creating beautiful, functional, and accessible web applications.
                                I am passionate about learning new technologies and working with others to create amazing products.
                            </Typography>

                            <Spacer height={60} />

                            <Tooltip title="Download My Resume" placement="top">
                                <Fab variant="extended" color="primary" sx={{ p: 4, borderRadius: 10 }} component="a" href="/documents/Chris_Owen_Resume.pdf" download={true} >
                                    <Typography variant="h6">
                                        Download Resume &nbsp;
                                    </Typography>
                                    <Download fontSize="large" />
                                </Fab>
                            </Tooltip>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}