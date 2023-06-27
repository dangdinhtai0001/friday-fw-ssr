import { ThemeOptions } from '@mui/system';

export const palette: ThemeOptions['palette'] = {
  type: 'dark',
  primary: {
    main: '#9c27b0',
    light: 'rgb(170, 131, 195)',
    dark: 'rgb(74, 20, 86)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#00bcd4',
    light: 'rgb(51, 181, 217)',
    dark: 'rgb(0, 91, 108)',
    contrastText: '#fff',
  },
  background: {
    paper: '#303030',
    default: '#212121',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
  error: {
    main: '#f44336',
    light: 'rgb(255, 138, 128)',
    dark: 'rgb(178, 43, 39)',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff5722',
    light: 'rgb(255, 147, 89)',
    dark: 'rgb(178, 85, 0)',
    contrastText: '#fff',
  },
  info: {
    main: '#2196f3',
    light: 'rgb(77, 171, 245)',
    dark: 'rgb(23, 105, 170)',
    contrastText: '#fff',
  },
  success: {
    main: '#8bc34a',
    light: 'rgb(139, 195, 74)',
    dark: 'rgb(56, 102, 32)',
    contrastText: '#fff',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};
