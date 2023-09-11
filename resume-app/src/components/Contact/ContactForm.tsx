import { Box, Paper, TextField, Fab, Typography } from '@mui/material';
import Spacer from '@/components/shared/spacer';
import { Send } from '@mui/icons-material';


export default function ContactForm() {
    return (
        <>
            <Box sx={{
                margin: {
                    sm: '0 1em 0 1em',
                    lg: '0 5em 0 2em',
                }
            }}>
                <TextField label="YOUR EMAIL" sx={{ width: { xs: '100%', sm: '100%', lg: '50%' }, borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30 } }} component={Paper} />

                <Spacer height={40} />

                <TextField label="YOUR SUBJECT" sx={{ width: '100%', borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30 } }} component={Paper} />

                <Spacer height={40} />

                <TextField label="YOUR MESSAGE" multiline rows={9} sx={{ width: '100%', borderRadius: 5 }} InputProps={{ sx: { borderRadius: 5 } }} component={Paper} />

                <Spacer height={40} />

                <Box sx={{ display: 'flex', justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'center',
                    lg: 'flex-start',
                    xl: 'flex-start',
                } }}>
                    <Fab variant="extended" color="primary" sx={{ width: '250px' }}>
                        <Typography variant="h6" fontWeight={500} sx={{ paddingRight: '10px' }} >
                            Send Message &nbsp;
                        </Typography>
                        <Send fontSize="large" sx={{ mr: 1, postition: 'fixed', right: 0 }} />
                    </Fab>
                </Box>
            </Box>
        </>
    )
}