import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import {
  defaultControllerContainer,
  typographyCaption2,
  typographyCaption1,
} from '@/package/preta/styled-shared';
import { IStyledInputContainerProps } from './types.d';

export const StyledInputElement = styled(
  'input',
  {}
)(
  ({
    theme,
    disabled,
  }: {
    theme?: IDefaultTheme;
    disabled: boolean;
  }) => ({
    ...typographyCaption1({ theme }),
    width: '100%',
    flexGrow: 1,
    background: 'inherit',
    border: 'none',
    borderRadius: 'inherit',
    outline: 0,
    boxSizing: 'border-box',
    padding: '0rem 0.2rem',

    '&[type="number"]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },

    cursor: disabled ? 'not-allowed' : 'inherit',
  })
);

export const StyledInputContainer = styled(
  'div',
  {}
)<IStyledInputContainerProps>(
  ({ theme, width, disabled }: IStyledInputContainerProps) => ({
    ...defaultControllerContainer({ theme, width, disabled }),

    // padding: '0.1rem 0px',
    padding: `${theme?.components.spacing.sx} ${theme?.components.spacing.mNudge}`,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: '0.3rem',
    gap: theme?.components.spacing.s,

    margin: `${theme?.components.spacing.none}`,

    // firefox
    '&:focus-visible': {
      outline: 0,
    },
  })
);

export const StyledAdornmentContainer = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption2({ theme }),
  lineHeight: '1.5rem',
}));
