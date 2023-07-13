import { IDefaultTheme } from '@/package/preta/types';
import { typographyCaption1 } from './TypographyStyled';

export const defaultControllerContainer = <T extends IDefaultTheme>({ theme, width, noneBorder }: { theme?: T, width?: number | string, noneBorder?: boolean }) => ({
  ...typographyCaption1({ theme }),

  width: width ? width : '100%',
  height: '1rem',
  padding: '0.75rem 0.5rem 0.75rem 0.5rem',

  backgroundColor: theme?.palette.background.default,
  color: theme?.palette.text.primary,

  borderRadius: theme?.components.cornerRadius.medium,
  border: noneBorder ? 'none' : `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,

  ':hover': {
    borderColor: noneBorder ? 'transparent' : theme?.palette.primary.main,
  },

  ':focus-within': {
    outline: 'none',
    borderColor: noneBorder ? 'transparent' : theme?.palette.primary.main,
    boxShadow: noneBorder ? '' : `0 0 0 1px ${theme?.palette.primary.dark}`
  },
});
