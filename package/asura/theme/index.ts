import { createTheme } from '@mui/system';
// local import
import light from './light';
import dark from './dark';

const lightTheme = createTheme(light);
const darkTheme = createTheme(dark);

const findThemeByMode = (mode: string) => {
  switch (mode) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};

export { lightTheme, darkTheme, findThemeByMode };
