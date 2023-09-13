import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer } from '@/package/preta/styled-shared';
import {} from './types.d';

export const StyledDefaultHeaderContainer = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
}));

export const StyledDefaultHeaderGroupContainer = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
}));
