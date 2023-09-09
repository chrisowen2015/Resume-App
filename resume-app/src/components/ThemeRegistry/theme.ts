import { Roboto } from 'next/font/google';
import { Shadows, createTheme, responsiveFontSizes } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightTheme = responsiveFontSizes(createTheme({
    palette: {
      mode: 'light',
      primary: {
          main: '#FF6A38'
      },
      secondary: {
        main: '#AE887D'
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa',
            }),
          }),
        },
      },
    },
  }));

  export const darkTheme = responsiveFontSizes(createTheme({
    palette: {
      mode: 'dark',
      primary: {
          main: '#FF6A38'
      },
      secondary: {
        main: '#AE887D'
      }
    },
    shadows: Array(25).fill('none') as Shadows,
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa',
            }),
          }),
        },
      },
    },
  }));

