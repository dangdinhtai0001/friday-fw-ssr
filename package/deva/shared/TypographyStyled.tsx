import { IDefaultTheme } from '@/package/preta/types';

export const typographyCaption1 = <T extends IDefaultTheme>({ theme }: { theme?: T }) => ({
  color: theme?.palette.text.primary,

  fontSize: theme?.typography.caption1.fontSize,
  fontWeight: theme?.typography.caption1.fontWeight,
  lineHeight: theme?.typography.caption1.lineHeight,
  letterSpacing: theme?.typography.caption1.letterSpacing,
});

export const typographyBody1Strong = <T extends IDefaultTheme>({ theme }: { theme?: T }) => ({
  color: theme?.palette.text.primary,
  
  fontSize: theme?.typography.body1Strong.fontSize,
  fontWeight: theme?.typography.body1Strong.fontWeight,
  lineHeight: theme?.typography.body1Strong.lineHeight,
  letterSpacing: theme?.typography.body1Strong.letterSpacing,
});