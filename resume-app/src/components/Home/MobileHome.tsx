import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Spacer from "../shared/spacer";
import { Download } from "@mui/icons-material";

export default function MobileHome() {
    return (
        <>
            <Box sx={{ width: '100%', padding: '3em 1em 0 1em' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image src="/images/chris-owen-mobile.jpeg"
                        alt="Chris Owen"
                        height={300}
                        width={300}
                        priority
                        style={{ borderRadius: '50%', transform: 'rotate(10deg)' }} />
                </div>

                <Spacer height={40} />

                <Box sx={{ padding: '10px' }}>
                    <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }} >
                        I&apos;M CHRIS OWEN
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700 }} >
                        SOFTWARE DEVELOPER
                    </Typography>
                    
                    <Spacer height={40} />

                    <Typography variant="h6" >
                        I&apos;m a Los Angeles based software developer with a passion for creating beautiful, functional, and accessible web applications.
                        I am passionate about learning new technologies and working with others to create amazing products.
                    </Typography>

                    <Spacer height={40} />

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" color="primary" component="a" href="/documents/Chris_Owen_Resume.pdf" download={true} sx={{ p: '1em 1em 1em 1.5em', borderRadius: 10 }} >
                            <Typography variant="h6">
                                Download Resume &nbsp;
                            </Typography>
                            <Download fontSize="large" />
                        </Button>
                    </Box>

                    <Spacer height={60} />
                    <Spacer height={40} />
                </Box>
            </Box>
        </>
    )
}