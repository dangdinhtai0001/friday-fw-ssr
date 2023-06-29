import { ThemeOptions } from '@mui/system';
import { IFontWeight, ISpacing, IStrokeWidth, ICornerRadius, IThemeTypography } from '@/package/preta/types';

const fontWeight: IFontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

const spacing: ISpacing = {
  none: '0px',
  xxs: '2px',
  sx: '4px',
  sNudge: '6px',
  s: '8px',
  mNudge: '10px',
  m: '12px',
  l: '16px',
  xxl: '24px',
  xxxl: '32px',
};

const strokeWidth: IStrokeWidth = {
  none: '0px',
  thin: '1px',
  thick: '2px',
  thicker: '3px',
  thickest: '4px',
}

const baseTypography: Record<string, any> = {
  fontFamily: 'Segoe UI',
  fontSize: '14px',
  fontWeight: fontWeight.regular,
  lineHeight: '20px',
  letterSpacing: spacing.none,
};

const cornerRadius: ICornerRadius = {
  none: '0px',
  small: '2px',
  medium: '4px',
  large: '8px',
  xLarge: '12px',
  circle: '50%'
}

// export const typography: ThemeOptions['typography'] = {
export const typography: IThemeTypography = {
  ...baseTypography,
  caption2: {
    fontSize: '0.7143rem', // 10px / 14px
    lineHeight: '14px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.regular,
  },
  caption2Strong: {
    fontSize: '0.7143rem', // 10px / 14px
    lineHeight: '14px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  caption1: {
    fontSize: '0.8571rem', // 12px / 14px
    lineHeight: '16px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.regular,
  },
  caption1Strong: {
    fontSize: '0.8571rem', // 12px / 14px
    lineHeight: '16px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  caption1Stronger: {
    fontSize: '0.8571rem', // 12px / 14px
    lineHeight: '16px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.bold,
  },
  body1: {
    fontSize: '1rem', // 14px / 14px
    lineHeight: '20px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.regular,
  },
  body1Strong: {
    fontSize: '1rem', // 14px / 14px
    lineHeight: '20px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  body1Stronger: {
    fontSize: '1rem', // 14px / 14px
    lineHeight: '20px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.bold,
  },
  body2: {
    fontSize: '1.1429rem', // 16px / 14px
    lineHeight: '22px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.regular,
  },
  subtitle2: {
    fontSize: '1.1429rem', // 16px / 14px
    lineHeight: '22px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  subtitle2Stronger: {
    fontSize: '1.1429rem', // 16px / 14px
    lineHeight: '22px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.bold,
  },
  subtitle1: {
    fontSize: '1.4286rem', // 20px / 14px
    lineHeight: '28px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  title3: {
    fontSize: '1.7143rem', // 24px / 14px
    lineHeight: '32px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  title2: {
    fontSize: '2rem', // 28px / 14px
    lineHeight: '36px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  title1: {
    fontSize: '2.2857rem', // 32px / 14px
    lineHeight: '40px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  largeTitle: {
    fontSize: '2.8571rem', // 40px / 14px
    lineHeight: '52px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
  display: {
    fontSize: '4.8571rem', // 68px / 14px
    lineHeight: '92px',
    letterSpacing: spacing.none,
    fontWeight: fontWeight.semibold,
  },
}

export const components: ThemeOptions['components'] = {
  fontWeight,
  spacing,
  strokeWidth,
  cornerRadius
}


