import createTheme, { Theme } from '@mui/system/createTheme';
import { ThemeOptions } from '@mui/system';
import { palette as lightPalette } from './palette/light';
import { palette as darkPalette } from './palette/dark';
import { typography } from './typography/default';

const lightTheme: Theme = createTheme({
  palette: lightPalette,
  typography: typography,
});

const darkTheme: Theme = createTheme({
  palette: darkPalette,
  typography: typography,
});

/**
 * Finds the theme based on the mode.
 * @param {string} mode - The mode of the theme (either 'light' or 'dark').
 * @returns {object} The theme object.
 */
const findThemeByMode = (mode: string): Theme => {
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
