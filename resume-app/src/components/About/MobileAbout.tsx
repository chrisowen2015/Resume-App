import { Box, Typography, Grid } from "@mui/material";
import Spacer from "@/components/shared/spacer";
import Image from 'next/image';
import MobileTile from "@/components/About/MobileTile";
import Employment from "./Employment";
import Education from "./Education";

const skills = [
    {
        header: "4+",
        text: "YEARS OF EXPERIENCE",
    },
    {
        header: "React",
        text: "NEXT.JS," + '\n' + "CRA",
    },
    {
        header: ".NET",
        text: "BLAZOR," + '\n' + " EF CORE",
    },
    {
        header: "Azure",
        text: "DEVOPS, AD, WEBAPPS",
    },

]

export default function MobileAbout() {
    return (
        <>
            <Box sx={{}}>

                <Spacer height={30} />

                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography variant="h1" fontWeight={800}>
                        ABOUT&nbsp;
                    </Typography>
                    <Typography color="primary" variant="h1" fontWeight={800} >
                        ME
                    </Typography>
                </Box>

                <Spacer height={80} />

                <Box>
                    <Typography variant="h4" fontWeight={600} sx={{ textAlign: 'center' }} >
                        Personal Information
                    </Typography>

                    <Spacer height={30} />

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src="/images/chris-owen-mobile.jpeg"
                            alt="Chris Owen"
                            height={250}
                            width={250}
                            priority
                            style={{ borderRadius: '50%' }} />
                    </div>

                    <Spacer height={30} />

                    <Box sx={{ padding: '10px' }}>
                        <Box sx={{ width: '100%', display: 'flex', }}>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.5)" }} align="center" >
                                    First Name: &nbsp;
                                </Typography>

                                <Typography variant="h6" align="center"  >
                                    Christopher
                                </Typography>
                            </Box>

                            <Box sx={{ width: '50%' }}>
                                <Typography variant="h6" align="center" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                    Location: &nbsp;
                                </Typography>

                                <Typography variant="h6" align="center" >
                                    Los Angeles, CA, USA
                                </Typography>
                            </Box>
                        </Box>

                        <Spacer height={30} />

                        <Box sx={{ width: '100%', display: 'flex', }}>
                            <Box sx={{ width: '50%' }}>
                                <Typography variant="h6" align="center" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                    Last Name: &nbsp;
                                </Typography>

                                <Typography variant="h6" align="center" >
                                    Owen
                                </Typography>
                            </Box>

                            <Box sx={{ width: 'min-content' }}>
                                <Typography variant="h6" align="center" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                    Email: &nbsp;
                                </Typography>

                                <Typography variant="h6" align="center" fontSize={'1em'} >
                                    chrisowen2015@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Spacer height={30} />

                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                        <Grid item xs={6} md={6}>
                            <MobileTile header={skills[0].header} text={skills[0].text} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <MobileTile header={skills[1].header} text={skills[1].text} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <MobileTile header={skills[2].header} text={skills[2].text} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <MobileTile header={skills[3].header} text={skills[3].text} />
                        </Grid>
                    </Grid>

                    <Spacer height={40} />


                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} variant="h4" component="h4">
                            EXPERIENCE
                        </Typography>
                    </Box>

                    <Spacer height={30} />

                    <Box sx={{ padding: 4 }}>
                        <Employment />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} variant="h4" component="h4">
                            EDUCATION
                        </Typography>
                    </Box>

                    <Spacer height={30} />

                    <Box sx={{ padding: 4 }}>
                        <Education />
                    </Box>



                    <Spacer height={30} />


                </Box>



            </Box>
        </>
    )
}