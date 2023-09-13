import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer } from '@/package/preta/styled-shared';

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
