import { Box, Paper, Typography } from '@mui/material';
import { HorizontalRule } from '@mui/icons-material';

export default function Tile({ header, text }: { header: string, text: string }) {
    return (
        <Box sx={{ width: '100%', display:'flex', justifyContent: 'space-evenly' }}>
            <Paper sx={{ padding: '1em 2em 2em 3em', width: '100%', height: 184, maxWidth: 320, borderRadius: 5 }} elevation={2}>
                <Typography variant="h2" color="primary" fontWeight={800}>
                    {header}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ width: '20%' }}>
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
