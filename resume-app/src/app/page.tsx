import { Box } from '@mui/material';
import Home from '@/components/Home/Home';
import  MobileHome from '@/components/Home/MobileHome';

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
        <Home />
      </Box>
      <Box sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'block',
        }
      }}>
        {/* The mobile layout to be displayed on smaller devices */}
        <MobileHome />
      </Box>
    </>
  )
}
