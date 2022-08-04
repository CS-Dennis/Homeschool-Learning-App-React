import { createTheme } from '@mui/material/styles';


export const orangeTheme =createTheme( {
  palette: {
    type: 'light',
    primary: {
      main: '#DC6333',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#20b1aa',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
    error: {
      main: '#e00d00',
    },
  },
});