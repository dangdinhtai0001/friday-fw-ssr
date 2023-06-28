import { ThemeOptions } from '@mui/system';

export const palette: ThemeOptions['palette'] = {
  type: 'dark',
  primary: {
    main: '#8e24aa',
    light: 'rgb(150, 81, 171)',
    dark: 'rgb(57, 11, 87)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f48fb1',
    light: 'rgb(246, 165, 192)',
    dark: 'rgb(130, 60, 83)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  background: {
    paper: '#424242',
    default: '#303030',
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
  error: {
    main: '#f44336',
    light: 'rgb(246, 99, 89)',
    dark: 'rgb(155, 44, 34)',
    contrastText: '#fff',
  },
  warning: {
    main: '#ff9800',
    light: 'rgb(255, 169, 68)',
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
  divider: 'rgba(255, 255, 255, 0.12)',
};
