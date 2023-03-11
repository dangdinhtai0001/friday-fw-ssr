import { createTheme } from '@mui/system';
// local import
import light from './light';
import dark from './dark';

const lightTheme = createTheme(light);
const darkTheme = createTheme(dark);

export { lightTheme, darkTheme };
