import { Roboto } from 'next/font/google';
import { Shadows, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { darkScrollbar } from '@mui/material';
import { grey } from "@mui/material/colors";

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
      main: '#014FD7'
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
      main: '#014FD7'
    }
  },
  shadows: Array(25).fill('none') as Shadows,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(
            {
              track: '#202022',
              thumb: '#585859',
              active: '#838384'
            }
          ),
          scrollbarWidth: "thin"
        }
      },
    },
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

