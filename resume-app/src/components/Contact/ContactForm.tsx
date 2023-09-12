'use client';

import { Box, TextField, Typography, Tooltip, Button, Snackbar, Alert } from '@mui/material';

import Spacer from '@/components/shared/spacer';
import { Send } from '@mui/icons-material';

import { FocusEvent, useState, } from 'react';

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [formBody, setFormBody] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: false,
        subject: false,
        message: false,
    });

    const [validationMessages, setValidationMessages] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const [toast, setToast] = useState({
        open: false,
        message: '',
        severity: '',
    });

    const validate = (event: FocusEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case 'email':
                if (value.length == 0) {
                    setValidationMessages({
                        ...validationMessages,
                        email: 'Email is required.',
                    });
                    setFormErrors({
                        ...formErrors,
                        email: true,
                    });
                } else if (!value.includes('@')) {
                    setValidationMessages({
                        ...validationMessages,
                        email: 'Email is invalid.',
                    });
                    setFormErrors({
                        ...formErrors,
                        email: true,
                    });
                } else {
                    setValidationMessages({
                        ...validationMessages,
                        email: '',
                    });
                    setFormErrors({
                        ...formErrors,
                        email: false,
                    });
                }
                break;
            case 'subject':
                if (value.length == 0) {
                    setValidationMessages({
                        ...validationMessages,
                        subject: 'Subject is required.',
                    });
                    setFormErrors({
                        ...formErrors,
                        subject: true,
                    });
                } else {
                    setValidationMessages({
                        ...validationMessages,
                        subject: '',
                    });
                    setFormErrors({
                        ...formErrors,
                        subject: false,
                    });
                }
                break;
            case 'message':
                if (value.length == 0) {
                    setValidationMessages({
                        ...validationMessages,
                        message: 'Message is required.',
                    });
                    setFormErrors({
                        ...formErrors,
                        message: true,
                    });
                } else {
                    setValidationMessages({
                        ...validationMessages,
                        message: '',
                    });
                    setFormErrors({
                        ...formErrors,
                        message: false,
                    });
                }
                break;
        }
    }

    const validateAll = () => {
        let valid = true;

        if (formBody.email.length == 0) {

            setValidationMessages((prevState) => {
                return {
                    ...prevState,
                    email: 'Email is required.',
                }
            });
            setFormErrors((prevState) => {
                return {
                    ...prevState,
                    email: true,
                }
            });
            valid = false;
        } else if (!formBody.email.includes('@')) {
            setValidationMessages((prevState) => {
                return {
                    ...prevState,
                    email: 'Email is invalid.',
                }
            });
            setFormErrors((prevState) => {
                return {
                    ...prevState,
                    email: true,
                }
            });
            valid = false;
        }

        if (formBody.subject.length == 0) {
            setValidationMessages((prevState) => {
                return {
                    ...prevState,
                    subject: 'Subject is required.',
                }
            });
            setFormErrors((prevState) => {
                return {
                    ...prevState,
                    subject: true,
                }
            });
            valid = false;
        }

        if (formBody.message.length == 0) {
            setValidationMessages((prevState) => {
                return {
                    ...prevState,
                    message: 'Message is required.',
                }
            });
            setFormErrors((prevState) => {
                return {
                    ...prevState,
                    message: true,
                }
            });
            valid = false;
        }

        return valid;
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormBody({
            ...formBody,
            [name]: value,
        });

    }

    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        setLoading((prevState) => { return true });

        const apiEndpoint = '/api/contact';

        if (!validateAll()) {
            setLoading((prevState) => { return false });
            return;
        } else {
            fetch(apiEndpoint, {
                method: 'POST',
                body: JSON.stringify(formBody),
            })
                .then((res) => res.json())
                .then((response) => {
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
            setLoading((prevState) => { return false });
        }
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
                <TextField label="YOUR EMAIL" name="email" value={formBody.email} onChange={onChange} sx={{ width: { xs: '100%', sm: '100%', lg: '50%' }, borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30, backgroundColor: 'rgba(255, 255, 255, 0.05)' } }} error={formErrors.email} helperText={validationMessages.email} onBlur={validate} />

                <Spacer height={40} />

                <TextField label="YOUR SUBJECT" name="subject" value={formBody.subject} onChange={onChange} sx={{ width: '100%', borderRadius: 30 }} InputProps={{ sx: { borderRadius: 30, backgroundColor: 'rgba(255, 255, 255, 0.05)' } }} error={formErrors.subject} helperText={validationMessages.subject} onBlur={validate} />

                <Spacer height={40} />

                <TextField label="YOUR MESSAGE" name="message" value={formBody.message} onChange={onChange} multiline rows={9} sx={{ width: '100%', borderRadius: 5 }} InputProps={{ sx: { borderRadius: 5, height: '239px', backgroundColor: 'rgba(255, 255, 255, 0.05)' } }} error={formErrors.message} helperText={validationMessages.message} onBlur={validate} />

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
                        <Button disabled={loading} variant="contained" color="primary" sx={{ p: '1em 1em 1em 1.5em', borderRadius: 10 }} onClick={ async (event) => await handleSubmit(event)} >
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