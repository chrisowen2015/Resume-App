import { Box, Paper, Typography } from '@mui/material';
import { HorizontalRule } from '@mui/icons-material';

export default function MobileTile({ header, text }: { header: string, text: string }) {
    return (
        <Box sx={{ width: '100%', height: '163px', display: 'flex', }}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                padding: '1em',
                borderRadius: 5,
                flexGrow: 1
            }}
                elevation={2}>
                <Typography variant="h2" color="primary" fontWeight={800}>
                    {header}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box>
                        <HorizontalRule fontSize="large" />
                    </Box>
                    <Box sx={{ width: '70%', display: 'block', whiteSpace: 'pre-line' }}>
                        <Typography variant="h6" fontWeight={400}>
                            {text}
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
