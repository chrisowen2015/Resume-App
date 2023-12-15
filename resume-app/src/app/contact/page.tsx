
import { Box } from '@mui/material';
import MobileContact from '@/components/Contact/MobileContact';
import Contact from '@/components/Contact/Contact';

export default function Page() {
    return (
        <>
            <Box sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'block'
                }
            }}>
                {/* The desktop layout to be displayed on medium and larger devices */}
                <Contact />
            </Box>
            <Box sx={{
                display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'block',
                    lg: 'none',
                }
            }}>
                {/* The mobile layout to be displayed on smaller devices */}
                <MobileContact />
            </Box>
        </>
    )
}
