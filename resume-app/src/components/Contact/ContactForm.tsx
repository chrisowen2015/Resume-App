'use client';

import { Box, Paper, TextField, Fab, Typography, Tooltip } from '@mui/material';
import Spacer from '@/components/shared/spacer';
import { Send } from '@mui/icons-material';
import { useState } from 'react';


export default function ContactForm() {
    const [formBody, setFormBody] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormBody({
            ...formBody,
            [name]: value,
        });

    }

    return (
        <>
            <Box sx={{
                margin: {
                    sm: '0 1em 0 1em',
                    lg: '0 1em 0 2em',
                }
            }}>
                <TextField label="YOUR EMAIL" name="email" value={formBody.email} onChange={onChange} sx={{ width: { xs: '100%', sm: '100%', lg: '50%' }, borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30 } }} component={Paper} />

                <Spacer height={40} />

                <TextField label="YOUR SUBJECT" name="subject" value={formBody.subject} onChange={onChange} sx={{ width: '100%', borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30 } }} component={Paper} />

                <Spacer height={40} />

                <TextField label="YOUR MESSAGE" name="message" value={formBody.message} onChange={onChange} multiline rows={9} sx={{ width: '100%', borderRadius: 5 }} InputProps={{ sx: { borderRadius: 5, height: '239px' } }} component={Paper} />

                <Spacer height={50} />

                <Box sx={{
                    display: 'flex', justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'center',
                        lg: 'flex-start',
                        xl: 'flex-start',
                    }
                }}>
                    <Tooltip title="Send Message" placement="top" >
                        <Fab variant="extended" color="primary" sx={{ width: '250px' }}>
                            <Typography variant="h6" fontWeight={500} sx={{ paddingRight: '10px' }} >
                                Send Message &nbsp;
                            </Typography>
                            <Send fontSize="large" sx={{ mr: 1, postition: 'fixed', right: 0 }} />
                        </Fab>

                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}