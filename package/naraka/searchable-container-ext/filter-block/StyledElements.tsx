import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer } from '@/package/preta/styled-shared';
import { IStyledFilterBlockContainerProps } from './types.d';

export const StyledFilterBlock = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: false }),
  padding: `0.5rem 0.5rem 0.5rem 0.5rem`,
  width: '',
}));

export const StyledFilterBlockButton = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  padding: `0.3rem 0rem 0rem 0rem`,
  display: 'flex',
  justifyContent: 'flex-end',
  // border: '1px solid red'
}));

// --------------------------------------------------------------------------------------------------------------------------------------

export const StyledFilterBlockContainer = styled(
  'div',
  {}
)(({ theme }: IStyledFilterBlockContainerProps) => ({
  ...defaultComponentContainer({ theme, noneBorder: false }),
  // padding: `${theme?.components.spacing.s}`,
  width: '',
}));

export const StyledFilterBlockHeader = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme?.components.spacing.s}`,
  width: '',
}));

export const StyledFilterBlockHeaderAction = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: `${theme?.components.spacing.sx}`,
}));

export const StyledFilterBlockContent = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  padding: `${theme?.components.spacing.sx}`,
  width: '',
}));
