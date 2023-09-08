import { Box, Typography } from "@mui/material";

export default function Home() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '5em 10em 0 10em' }}>
                <Typography variant="h1" align="center">
                    Home
                </Typography>
            </Box>
        </>
    )
}