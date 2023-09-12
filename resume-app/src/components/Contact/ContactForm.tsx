'use client';

import { Box, Paper, TextField, Fab, Typography, Tooltip, Button, Snackbar, Alert } from '@mui/material';

import Spacer from '@/components/shared/spacer';
import { Send } from '@mui/icons-material';
import { useState } from 'react';

export default function ContactForm() {
    const [formBody, setFormBody] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [toast, setToast] = useState({
        open: false,
        message: '',
        severity: '',
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormBody({
            ...formBody,
            [name]: value,
        });
    }

    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const apiEndpoint = '/api/contact';

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(formBody),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                if (!response.error) {
                    setToast({
                        message: 'Message sent successfully!',
                        severity: 'success',
                        open: true,
                    });
                    setFormBody({
                        email: '',
                        subject: '',
                        message: '',
                    });
                } else {
                    setToast({
                        message: 'Message failed to send. Please try again.',
                        severity: 'error',
                        open: true,
                    });
                }
            })
            .catch((err) => {
                setToast({
                    message: 'Message failed to send. Please try again.',
                    severity: 'error',
                    open: true,
                });
            });
    }

    const handleCloseSnackbar = (event: React.SyntheticEvent | Event, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setToast({
            ...toast,
            open: false,
        });
    };

    const handleCloseToast = () => {
        setToast({
            ...toast,
            open: false,
        });
    }

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={toast.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert variant='filled' onClose={handleCloseToast} severity={toast.severity == 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
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
                        <Button variant="contained" color="primary" sx={{ p: '1em 1em 1em 1.5em', borderRadius: 10 }} onClick={handleSubmit} >
                            <Typography variant="h6">
                                Send Message &nbsp;
                            </Typography>
                            <Send fontSize="large" />
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
        </>
    )
}