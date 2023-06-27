import createTheme, { Theme } from '@mui/system/createTheme';
import light from './light';
import dark from './dark';

const lightTheme: Theme = createTheme(light);
const darkTheme: Theme = createTheme(dark);

/**
 * Finds the theme based on the mode.
 * @param {string} mode - The mode of the theme (either 'light' or 'dark').
 * @returns {object} The theme object.
 */
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
