import { ThemeOptions } from '@mui/system';

export const palette: ThemeOptions['palette'] = {
  type: 'light',
  primary: {
    main: '#0078D7',
    light: 'rgb(86,141,222)',
    dark: '#106EBE',
    contrastText: '#FFF',
  },
  secondary: {
    main: 'rgb(212, 203, 196)',
    light: 'rgb(239, 232, 222)',
    dark: 'rgb(152, 139, 129)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  background: {
    paper: '#FFF',
    default: '#F2F2F2',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(255, 245, 238, 1)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  error: {
    main: '#D50000',
    light: '#FF5131',
    dark: '#9B0000',
    contrastText: '#FFF',
  },
  warning: {
    main: '#F7630C',
    light: '#FFAA44',
    dark: '#B7472A',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    main: '#1E88E5',
    light: '#6AAFFF',
    dark: '#005CB2',
    contrastText: '#FFF',
  },
  success: {
    main: '#00A300',
    light: '#52C41A',
    dark: '#008000',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};
