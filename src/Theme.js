import { createTheme } from '@mui/material/styles';


export const orangeTheme =createTheme( {
  palette: {
    type: 'light',
    primary: {
      main: '#ff598f',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#FE0051',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
    },
    error: {
      main: '#e00d00',
    },
  },
});