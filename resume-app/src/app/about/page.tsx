
import { Box } from '@mui/material';
import MobileAbout from '@/components/About/MobileAbout';
import About from '@/components/About/About';

export default function Page() {
  return (
    <>
      <Box sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
        }
      }}>
        {/* The desktop layout to be displayed on medium and larger devices */}
        <About />
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
        <MobileAbout />
      </Box>
    </>
  )
}
