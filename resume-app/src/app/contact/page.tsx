
import { Box, Slide } from '@mui/material';
import MobileContact from '@/components/Contact/MobileContact';
import Contact from '@/components/Contact/Contact';

export default function Page() {
    return (
        <>
            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'block',
                }
            }}>
                {/* The desktop layout to be displayed on medium and larger devices */}

                <Slide direction="down" in={true} timeout={750} style={{ width: '100%' }} mountOnEnter unmountOnExit appear={true}>
                    <Contact />
                </Slide>
            </Box>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'none',
                }
            }}>
                {/* The mobile layout to be displayed on smaller devices */}
                <MobileContact />
            </Box>
        </>
    )
}
