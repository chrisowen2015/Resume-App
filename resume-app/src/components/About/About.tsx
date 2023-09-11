import { Box, Grid, Typography } from "@mui/material";
import Spacer from "../shared/spacer";

import Tile from "@/components/About/Tile";
import Employment from "./Employment";
import Education from "./Education";
import Image from 'next/image';

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

export default function About() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{
                width: {
                    md: '100%',
                    lg: '100%',
                    xl: '80%',
                }, padding: '3em 0em 0 0em'
            }} >
                <Spacer height={30} />

                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography variant="h1" fontWeight={800}>
                        ABOUT &nbsp;
                    </Typography>
                    <Typography color="primary" variant="h1" fontWeight={800} >
                        ME
                    </Typography>
                </Box>

                <Spacer height={80} />

                <Box sx={{
                    display: 'flex',
                    padding: {
                        lg: '0px 5em 0 3em',
                        xl: '0 0 0 0',
                    }
                }}>
                    <Box sx={{ width: '50%' }} >
                        <Box>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/images/chris-owen-mobile.jpeg"
                                    alt="Chris Owen"
                                    height={250}
                                    width={250}
                                    priority
                                    style={{ borderRadius: '50%', transform: 'rotate(10deg)' }} />
                            </div>
                            <Spacer height={30} />

                            <Typography variant="h4" fontWeight={600} sx={{ textAlign: 'center' }} >
                                Personal Information
                            </Typography>

                            <Spacer height={20} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Box>
                                    <Box sx={{ display: 'flex' }} >
                                        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                            First Name: &nbsp;
                                        </Typography>

                                        <Typography variant="h6" >
                                            Christopher
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex' }} >
                                        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                            Last Name: &nbsp;
                                        </Typography>

                                        <Typography variant="h6" >
                                            Owen
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <Box sx={{ display: 'flex' }} >
                                        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                            Location: &nbsp;
                                        </Typography>

                                        <Typography variant="h6" >
                                            Los Angeles, CA, USA
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex' }} >
                                        <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.5)" }} >
                                            Email: &nbsp;
                                        </Typography>

                                        <Typography variant="h6" >
                                            chrisowen2015@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ width: '50%' }}>
                        <Grid container spacing={2} >
                            <Grid item md={6} lg={6} xl={6} >
                                <Tile header={skills[0].header} text={skills[0].text} />
                            </Grid>
                            <Grid item md={6} lg={6} xl={6} >
                                <Tile header={skills[1].header} text={skills[1].text} />
                            </Grid>
                            <Grid item md={6} lg={6} xl={6} >
                                <Tile header={skills[2].header} text={skills[2].text} />
                            </Grid>
                            <Grid item md={6} lg={6} xl={6} >
                                <Tile header={skills[3].header} text={skills[3].text} />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Spacer height={100} />

                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} variant="h4" component="h4">
                            EXPERIENCE
                        </Typography>
                    </Box>

                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <Typography fontWeight={600} variant="h4" component="h4">
                            EDUCATION
                        </Typography>
                    </Box>
                </Box>

                <Spacer height={50} />

                <Grid container spacing={4} sx={{
                    padding: {
                        lg: '0px 0em 0 3em',
                        xl: '0 0 0 0',
                    }
                }}>
                    <Grid item md={6} lg={6} xl={6}  >
                        <Employment />
                    </Grid>

                    <Grid item md={6} lg={6} xl={6} >
                        <Box sx={{ marginLeft: 5 }}>
                            <Education />
                        </Box>
                    </Grid>
                </Grid>

                <Spacer height={50} />
            </Box>
        </Box>
    )
}