import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { ThemeOptions, ThemeProvider, useTheme } from '@mui/system';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/configureStore';
import { findThemeByMode } from '../theme';
import { Global, Theme } from '@emotion/react';

const App = ({ Component, pageProps }: AppProps) => {
  const palette = useSelector(
    (state: RootState) => state.theme.palette
  );

  // The 'findThemeByMode' function is called on every render, which can cause unnecessary re-renders. Memoizing the result with 'useMemo' can improve performance.
  const theme = useMemo(() => findThemeByMode(palette.mode), [palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const GlobalStyled = () => {
  const theme = useTheme<any>();

  return (
    <Global styles={{
      body: {
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }
    }} />
  );

}

export default App;

