
import { Box, Slide } from '@mui/material';
import MobileAbout from '@/components/About/MobileAbout';
import About from '@/components/About/About';

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
          <About />
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
        <MobileAbout />
      </Box>
    </>
  )
}
