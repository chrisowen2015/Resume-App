import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Box } from '@mui/material';
import NavButtons from '@/components/Navigation/NavButtons';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris Owen',
  description: 'Chris Owen, Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
          }}>
            <Box sx={{ flexGrow: 1 }}>
              {children}
            </Box>
            <NavButtons />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
