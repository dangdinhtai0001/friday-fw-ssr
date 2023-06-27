import { ThemeOptions } from '@mui/system';

export const palette: ThemeOptions['palette'] = {
  type: 'light',
  primary: {
    main: '#3f51b5',
    light: 'rgb(101, 115, 195)',
    dark: 'rgb(44, 56, 126)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#03A9F4',
    light: 'rgb(53, 186, 246)',
    dark: 'rgb(2, 118, 170)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  background: {
    paper: '#f7f7f7',
    default: '#fafafa',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  error: {
    main: '#FF0000',
    light: 'rgb(255, 51, 51)',
    dark: 'rgb(178, 0, 0)',
    contrastText: '#fff',
  },
  warning: {
    main: '#FF9800',
    light: 'rgb(255, 172, 51)',
    dark: 'rgb(178, 106, 0)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#2196f3',
    light: 'rgb(77, 171, 245)',
    dark: 'rgb(23, 105, 170)',
    contrastText: '#fff',
  },
  success: {
    main: '#4caf50',
    light: 'rgb(111, 191, 115)',
    dark: 'rgb(53, 122, 56)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};
