import { IDefaultTheme } from '@/package/preta/types';
import { typographyCaption1 } from './TypographyStyled';

export const defaultComponentContainer = <T extends IDefaultTheme>({
  theme,
  width,
  noneBorder,
}: {
  theme?: T;
  width?: number | string;
  noneBorder?: boolean;
}) => ({
  width: width ? width : '100%',

  borderRadius: theme?.components.cornerRadius.medium,
  border: noneBorder
    ? 'none'
    : `${theme?.components.strokeWidth.thin} solid ${theme?.palette.secondary.main}`,
});

export const defaultControllerContainer = <T extends IDefaultTheme>({
  theme,
  width,
  noneBorder,
  disabled = false,
}: {
  theme?: T;
  width?: number | string;
  noneBorder?: boolean;
  disabled?: boolean;
}) => ({
  ...typographyCaption1({ theme }),

  ...defaultComponentContainer({ theme, width, noneBorder }),

  height: 'fit-content',
  padding: '0.75rem 0.5rem 0.75rem 0.5rem',

  backgroundColor: theme?.palette.background.default,
  color: theme?.palette.text.primary,

  ':hover': {
    // borderColor: noneBorder ? 'transparent' : theme?.palette.primary.main,
    // borderColor: disabled ? theme?.palette.secondary.main : theme?.palette.primary.main,
    borderColor: noneBorder
      ? 'transparent'
      : disabled
      ? theme?.palette.secondary.main
      : theme?.palette.primary.main,

    // borderColor: disabled ? "green" : "red",
  },

  ':focus-within': {
    outline: 'none',
    borderColor: noneBorder
      ? 'transparent'
      : theme?.palette.primary.main,
    boxShadow: noneBorder
      ? ''
      : `0 0 0 1px ${theme?.palette.primary.dark}`,
  },
});
