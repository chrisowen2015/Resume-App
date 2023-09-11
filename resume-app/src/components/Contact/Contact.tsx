import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Spacer from "../shared/spacer";
import ContactForm from "./ContactForm";
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import { Mail } from "@mui/icons-material";

export default function Contact() {

    return (
        <>
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
                            CONTACT &nbsp;
                        </Typography>
                        <Typography color="primary" variant="h1" fontWeight={800} >
                            ME
                        </Typography>
                    </Box>

                    <Spacer height={80} />


                    <Grid container spacing={2} sx={{ width: '100%' }}>
                        <Grid item md={12} lg={5}>
                            <Box sx={{ margin: '0 2em 0 5em' }}>
                                <Typography variant="h4" fontWeight={600} >
                                    SEND ME A MESSAGE!
                                </Typography>

                                <Spacer height={30} />

                                <Typography variant="h6" sx={{}}>
                                    Looking for a frontend developer to bring fresh ideas to your team?
                                    I'm always looking for new opportunities to learn and grow and contribute to great projects.
                                    Feel free to reach out to me with any questions or comments you may have!
                                </Typography>

                                <Spacer height={40} />

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <MapIcon color="primary" sx={{ marginRight: '15px', fontSize: 45 }} />
                                    <span>
                                        <Typography variant="h6" sx={{ color: "" }}>
                                            LOCATION
                                        </Typography>

                                        <Spacer height={10} />

                                        <Typography variant="h6" sx={{}}>
                                            Pasadena, California, USA
                                        </Typography>
                                    </span>
                                </Box>

                                <Spacer height={40} />

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon color="primary" sx={{ marginRight: '15px', fontSize: 45 }} />
                                    <span>
                                        <Typography variant="h6" sx={{ color: "" }}>
                                            LOCATION
                                        </Typography>

                                        <Spacer height={10} />

                                        <Typography variant="h6" sx={{}}>
                                            Pasadena, California, USA
                                        </Typography>
                                    </span>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item md={12} lg={7}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}