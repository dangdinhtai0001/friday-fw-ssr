import { ThemeOptions } from '@mui/system';

const common = {
  fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
  fontSize: '16px',
  fontWeightLight: 300,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  fontWeightSemiBold: 600,
  fontWeightRegular: 400,
}

export const typography: ThemeOptions['typography'] = {
  ...common,
  display: {
    fontSize: '4.25rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '5.75rem',
    letterSpacing: '-0.01562rem',
  },
  titleLarge: {
    fontSize: '2.5rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '3.25rem',
    letterSpacing: '-0.00833rem',
  },
  title0: {
    fontSize: '2rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '2.5rem',
    letterSpacing: '0',
  },
  title1: {
    fontSize: '1.75rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '2.25rem',
    letterSpacing: '0.00735rem',
  },
  title2: {
    fontSize: '1.5rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '2rem',
    letterSpacing: '0',
  },
  subtitle0: {
    fontSize: '1.25rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '1.625rem',
    letterSpacing: '0.0075rem',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '1.375rem',
    letterSpacing: '0.00938rem',
  },
  body0: {
    fontSize: '0.875rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '1.25rem',
    letterSpacing: '0.00938rem',
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: common.fontWeightRegular,
    lineHeight: '1.25rem',
    letterSpacing: '0.01071rem',
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: common.fontWeightSemiBold,
    lineHeight: '1.25rem',
    letterSpacing: '0.02857rem',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: common.fontWeightRegular,
    lineHeight: '1rem',
    letterSpacing: '0.03333rem',
  },
};


