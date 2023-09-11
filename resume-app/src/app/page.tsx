import { Box, Slide } from '@mui/material';
import Home from '@/components/Home/Home';
import MobileHome from '@/components/Home/MobileHome';

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
        <Slide direction="down" in={true} timeout={750} style={{ width: '100%' }} mountOnEnter unmountOnExit appear={true} >
          <Home />
        </Slide>
      </Box >
      <Box sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
        }
      }}>
        {/* The mobile layout to be displayed on smaller devices */}
        <MobileHome />
      </Box>
    </>
  )
}
