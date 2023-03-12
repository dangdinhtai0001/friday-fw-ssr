// next import
import type { ReactNode } from 'react';
// 3rd import
import { ThemeProvider } from '@mui/system';
import { useSelector } from 'react-redux';
// local import;
import type { RootState } from '@/package/asura/store/configureStore';
import { findThemeByMode } from '@/package/asura/theme';

interface DevaThemeProviderProps {
  children: ReactNode;
}

const DevaThemeProvider = ({ children }: DevaThemeProviderProps) => {
  const palette = useSelector(
    (state: RootState) => state.theme.palette
  );

  return (
    <ThemeProvider theme={findThemeByMode(palette.mode)}>
      {children}
    </ThemeProvider>
  );
};
export default DevaThemeProvider;
