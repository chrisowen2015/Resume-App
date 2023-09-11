import { Box, Typography } from "@mui/material";
import Spacer from "@/components/shared/spacer";
import ContactForm from "./ContactForm";
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';

export default function MobileContact() {
    return (
        <>
            <Box sx={{ padding: '3em 0em 0 0em' }}>


                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Typography variant="h1" fontWeight={800}>
                        CONTACT&nbsp;
                    </Typography>
                    <Typography color="primary" variant="h1" fontWeight={800} >
                        ME
                    </Typography>
                </Box>

                <Spacer height={80} />

                <Box sx={{ margin: '0 1em 0 1em' }}>
                    <Typography variant="h3" fontWeight={600} align='center' >
                        SEND ME A MESSAGE!
                    </Typography>

                    <Spacer height={30} />

                    <Typography variant="h6" sx={{}}>
                        Looking for a frontend developer to bring fresh ideas to your team?
                        I'm always looking for new opportunities to learn and grow and contribute to great projects.
                        Feel free to reach out to me with any questions or comments you may have!
                    </Typography>

                    <Spacer height={40} />

                    <ContactForm />
                    
                    <Spacer height={40} />
                    <Spacer height={60} />

                </Box>
            </Box>
        </>
    )
}