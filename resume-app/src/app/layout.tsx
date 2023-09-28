'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Box, CircularProgress, Slide } from '@mui/material';
import NavButtons from '@/components/Navigation/NavButtons';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

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
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode !== null) {
      setDarkMode(mode === "true");
      setLoading(false);
    }
  }, []);

  const switchTheme: any = (newMode: any) => {
    console.log(`set localStore ${newMode}`);
    localStorage.setItem("mode", newMode);
    setDarkMode(!darkMode);
  }

  return (
    <html lang="en">
      <head>
        <title>Chris Owen</title>
      </head>
      <body>
        <ThemeRegistry mode={darkMode}>

          {
            loading ?
              <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress color="primary" size={'5rem'} sx={{ fontSize: '300px' }} />
              </Box>
              :
              <Slide in={!loading} direction='down' mountOnEnter timeout={1000}>
                <Box sx={{
                  display: {
                    xs: 'block',
                    sm: 'block',
                    md: 'flex',
                    lg: 'flex',
                    xl: 'flex',
                  },
                }}>
                  <Box sx={{
                    flexGrow: 1, marginRight: {
                      xs: '0px',
                      sm: '0px',
                      md: '104px',
                      lg: '104px',
                      xl: '104px',
                    }
                  }}>
                    {children}
                  </Box>
                  <NavButtons switchTheme={switchTheme} darkMode={darkMode} />
                </Box>
              </Slide>
          }

        </ThemeRegistry>
        <Analytics />
      </body>
    </html>
  )
}
