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
          fontFamily: theme.typography.root.fontFamily,
          fontSize: theme.typography.root.fontSize,
          fontWeight: theme.typography.root.fontWeight,
          lineHeight: theme.typography.root.lineHeight,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
        '.caption-2': {
          fontSize: theme.typography.caption2.fontSize,
          fontWeight: theme.typography.caption2.fontWeight,
          lineHeight: theme.typography.caption2.lineHeight,
          letterSpacing: theme.typography.caption2.letterSpacing,
        },
        '.caption-2-strong': {
          fontSize: theme.typography.caption2Strong.fontSize,
          fontWeight: theme.typography.caption2Strong.fontWeight,
          lineHeight: theme.typography.caption2Strong.lineHeight,
          letterSpacing: theme.typography.caption2Strong.letterSpacing,
        },
        '.caption-1': {
          fontSize: theme.typography.caption1.fontSize,
          fontWeight: theme.typography.caption1.fontWeight,
          lineHeight: theme.typography.caption1.lineHeight,
          letterSpacing: theme.typography.caption1.letterSpacing,
        },
        '.caption-1-strong': {
          fontSize: theme.typography.caption1Strong.fontSize,
          fontWeight: theme.typography.caption1Strong.fontWeight,
          lineHeight: theme.typography.caption1Strong.lineHeight,
          letterSpacing: theme.typography.caption1Strong.letterSpacing,
        },
        '.caption-1-stronger': {
          fontSize: theme.typography.caption1Stronger.fontSize,
          fontWeight: theme.typography.caption1Stronger.fontWeight,
          lineHeight: theme.typography.caption1Stronger.lineHeight,
          letterSpacing: theme.typography.caption1Stronger.letterSpacing,
        },
        '.body-1': {
          fontSize: theme.typography.body1.fontSize,
          fontWeight: theme.typography.body1.fontWeight,
          lineHeight: theme.typography.body1.lineHeight,
          letterSpacing: theme.typography.body1.letterSpacing,
        },
        '.body-1-strong': {
          fontSize: theme.typography.body1Strong.fontSize,
          fontWeight: theme.typography.body1Strong.fontWeight,
          lineHeight: theme.typography.body1Strong.lineHeight,
          letterSpacing: theme.typography.body1Strong.letterSpacing,
        },
        '.body-1-stronger': {
          fontSize: theme.typography.body1Stronger.fontSize,
          fontWeight: theme.typography.body1Stronger.fontWeight,
          lineHeight: theme.typography.body1Stronger.lineHeight,
          letterSpacing: theme.typography.body1Stronger.letterSpacing,
        },
        '.body-2': {
          fontSize: theme.typography.body2.fontSize,
          fontWeight: theme.typography.body2.fontWeight,
          lineHeight: theme.typography.body2.lineHeight,
          letterSpacing: theme.typography.body2.letterSpacing,
        },
        '.subtitle-2': {
          fontSize: theme.typography.subtitle2.fontSize,
          fontWeight: theme.typography.subtitle2.fontWeight,
          lineHeight: theme.typography.subtitle2.lineHeight,
          letterSpacing: theme.typography.subtitle2.letterSpacing,
        },
        '.subtitle-2-stronger': {
          fontSize: theme.typography.subtitle2Stronger.fontSize,
          fontWeight: theme.typography.subtitle2Stronger.fontWeight,
          lineHeight: theme.typography.subtitle2Stronger.lineHeight,
          letterSpacing: theme.typography.subtitle2Stronger.letterSpacing,
        },
        '.subtitle-1': {
          fontSize: theme.typography.subtitle1.fontSize,
          fontWeight: theme.typography.subtitle1.fontWeight,
          lineHeight: theme.typography.subtitle1.lineHeight,
          letterSpacing: theme.typography.subtitle1.letterSpacing,
        },
        '.title-3': {
          fontSize: theme.typography.title3.fontSize,
          fontWeight: theme.typography.title3.fontWeight,
          lineHeight: theme.typography.title3.lineHeight,
          letterSpacing: theme.typography.title3.letterSpacing,
        },
        '.title-2': {
          fontSize: theme.typography.title2.fontSize,
          fontWeight: theme.typography.title2.fontWeight,
          lineHeight: theme.typography.title2.lineHeight,
          letterSpacing: theme.typography.title2.letterSpacing,
        },
        '.title-1': {
          fontSize: theme.typography.title1.fontSize,
          fontWeight: theme.typography.title1.fontWeight,
          lineHeight: theme.typography.title1.lineHeight,
          letterSpacing: theme.typography.title1.letterSpacing,
        },
        '.large-title': {
          fontSize: theme.typography.largeTitle.fontSize,
          fontWeight: theme.typography.largeTitle.fontWeight,
          lineHeight: theme.typography.largeTitle.lineHeight,
          letterSpacing: theme.typography.largeTitle.letterSpacing,
        },
        '.display': {
          fontSize: theme.typography.display.fontSize,
          fontWeight: theme.typography.display.fontWeight,
          lineHeight: theme.typography.display.lineHeight,
          letterSpacing: theme.typography.display.letterSpacing,
        },

        '::-webkit-scrollbar': {
          width: '20px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: theme?.palette.secondary.main,
          borderRadius: '20px',
          border: '6px solid transparent',
          backgroundClip: 'content-box',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme?.palette.primary.main,
        },
      }}
    />
  );
};

export default App;
