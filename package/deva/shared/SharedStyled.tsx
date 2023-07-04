import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';

export const defaultControllerContainer = <T extends IDefaultTheme>({ theme }: { theme?: T }) => ({
  ...typographyCaption1({ theme }),

  width: '100%',
  height: '1rem',
  padding: '0.75rem 0.5rem 0.75rem 0.5rem',

  backgroundColor: theme?.palette.background.default,
  color: theme?.palette.text.primary,

  borderRadius: theme?.components.cornerRadius.medium,
  border: `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,

  ':hover': {
    borderColor: theme?.palette.primary.main,
  },

  ':focus-within': {
    outline: 'none',
    borderColor: theme?.palette.primary.main,
    boxShadow: `0 0 0 1px ${theme?.palette.primary.dark}`
  },
});

export const typographyCaption1 = <T extends IDefaultTheme>({ theme }: { theme?: T }) => ({
  fontSize: theme?.typography.caption1.fontSize,
  fontWeight: theme?.typography.caption1.fontWeight,
  lineHeight: theme?.typography.caption1.lineHeight,
  letterSpacing: theme?.typography.caption1.letterSpacing,
});

export const typographyBody1Strong = <T extends IDefaultTheme>({ theme }: { theme?: T }) => ({
  fontSize: theme?.typography.body1Strong.fontSize,
  fontWeight: theme?.typography.body1Strong.fontWeight,
  lineHeight: theme?.typography.body1Strong.lineHeight,
  letterSpacing: theme?.typography.body1Strong.letterSpacing,
});