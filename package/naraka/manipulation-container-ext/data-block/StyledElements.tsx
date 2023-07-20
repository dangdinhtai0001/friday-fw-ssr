import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { typographyBody1Strong } from '@/package/preta/styled-shared';
import { IStyledLabelProps, IStyledMessageProps } from './types.d'

export const StyledLabel = styled('div', {})<IStyledLabelProps>(({ theme, status, textAlign }: IStyledLabelProps) => ({
  ...typographyBody1Strong({ theme }),

  color: status === 'error' ? theme?.palette.error.main :
    status === 'warning' ? theme?.palette.warning.main : 'inherit',
  textAlign: textAlign,
}));

export const StyledMessage = styled('div', {})<IStyledMessageProps>(({ theme, status, textAlign }: IStyledLabelProps) => ({
  color: status === 'error' ? theme?.palette.error.main :
    status === 'warning' ? theme?.palette.warning.main : 'inherit',
}));

export const StyledRequiredIcon = styled('span', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  color: theme?.palette.error.main,
  fontSize: '1rem',
  marginLeft: '0.1rem',
}));

export const StyledDataBlockRoot = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  alignContent: 'center',
}));