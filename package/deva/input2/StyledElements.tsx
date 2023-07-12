import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1 } from '@/package/preta/styled-shared';
import { IStyledInputContainerProps } from './types.d'

export const StyledInputElement = styled('input', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
  width: '100%',
  flexGrow: 1,
  background: 'inherit',
  border: 'none',
  borderRadius: 'inherit',
  outline: 0,
  boxSizing: 'border-box',
}));

export const StyledInputContainer = styled('div', {})<IStyledInputContainerProps>(({ theme, width }: IStyledInputContainerProps) => ({
  ...defaultControllerContainer({ theme, width }),

  width: '',
  padding: '0.3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // firefox
  '&:focus-visible': {
    outline: 0
  }
}));

export const StyledAdornmentContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
  lineHeight: '1.5rem',
}));