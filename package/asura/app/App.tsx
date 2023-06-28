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
  const theme = useMemo(
    () => findThemeByMode(palette.mode),
    [palette.mode]
  );

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
    <Global
      styles={{
        body: {
          fontFamily: theme.typography.fontFamily,
          fontSize: `${theme.typography.fontSize}`,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
        '.display': {
          fontSize: `${theme.typography.display.fontSize}`,
          fontWeight: theme.typography.display.fontWeight,
          lineHeight: theme.typography.display.lineHeight,
          letterSpacing: `${theme.typography.display.letterSpacing}`,
        },
        '.title-large': {
          fontSize: `${theme.typography.titleLarge.fontSize}`,
          fontWeight: theme.typography.titleLarge.fontWeight,
          lineHeight: theme.typography.titleLarge.lineHeight,
          letterSpacing: `${theme.typography.titleLarge.letterSpacing}`,
        },
        '.title-0': {
          fontSize: `${theme.typography.title0.fontSize}`,
          fontWeight: theme.typography.title0.fontWeight,
          lineHeight: theme.typography.title0.lineHeight,
          letterSpacing: `${theme.typography.title0.letterSpacing}`,
        },
        '.title-1': {
          fontSize: `${theme.typography.title1.fontSize}`,
          fontWeight: theme.typography.title1.fontWeight,
          lineHeight: theme.typography.title1.lineHeight,
          letterSpacing: `${theme.typography.title1.letterSpacing}`,
        },
        '.title-2': {
          fontSize: `${theme.typography.title2.fontSize}`,
          fontWeight: theme.typography.title2.fontWeight,
          lineHeight: theme.typography.title2.lineHeight,
          letterSpacing: `${theme.typography.title2.letterSpacing}`,
        },
        '.subtitle-0': {
          fontSize: `${theme.typography.subtitle0.fontSize}`,
          fontWeight: theme.typography.subtitle0.fontWeight,
          lineHeight: theme.typography.subtitle0.lineHeight,
          letterSpacing: `${theme.typography.subtitle0.letterSpacing}`,
        },
        '.subtitle-1': {
          fontSize: `${theme.typography.subtitle1.fontSize}`,
          fontWeight: theme.typography.subtitle1.fontWeight,
          lineHeight: theme.typography.subtitle1.lineHeight,
          letterSpacing: `${theme.typography.subtitle1.letterSpacing}`,
        },
        '.body-0': {
          fontSize: `${theme.typography.body0.fontSize}`,
          fontWeight: theme.typography.body0.fontWeight,
          lineHeight: theme.typography.body0.lineHeight,
          letterSpacing: `${theme.typography.body0.letterSpacing}`,
        },
        '.body-1': {
          fontSize: `${theme.typography.body1.fontSize}`,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          letterSpacing: `${theme.typography.body1.letterSpacing}`,
        },
        '.button': {
          fontSize: `${theme.typography.button.fontSize}`,
          fontWeight: theme.typography.button.fontWeight,
          lineHeight: theme.typography.button.lineHeight,
          letterSpacing: `${theme.typography.button.letterSpacing}`,
          textTransform: theme.typography.button.textTransform,
        },
        '.caption': {
          fontSize: `${theme.typography.caption.fontSize}`,
          fontWeight: theme.typography.caption.fontWeight,
          lineHeight: theme.typography.caption.lineHeight,
          letterSpacing: `${theme.typography.caption.letterSpacing}`,
        },
        '.corner-radius-none': {
          borderRadius: `${theme.components.cornerRadius.none}`,
        },
        '.corner-radius-circle': {
          borderRadius: `${theme.components.cornerRadius.circle}`,
        }
      }}
    />
  );
};

export default App;
