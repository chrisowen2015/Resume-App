import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Box } from '@mui/material';
import NavButtons from '@/components/Navigation/NavButtons';
import { Analytics } from '@vercel/analytics/react';

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
      <head>
        <title>Chris Owen</title>
      </head>
      <body>
        <ThemeRegistry>
          <Box sx={{
            display: {
              xs: 'block',
              sm: 'block',
              md: 'block',
              lg: 'flex',
              xl: 'flex',
            },
          }}>
            <Box sx={{ flexGrow: 1, marginRight: {
              xs: '0px',
              sm: '0px',
              md: '0px',
              lg: '104px',
              xl: '104px',
            } }}>
              {children}
              <Analytics />
            </Box>
            <NavButtons />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
