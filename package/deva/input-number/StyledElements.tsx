import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1 } from '@/package/preta/styled-shared';

export const StyledNumberControlItem = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  cursor: 'pointer',
  margin: '0',
  border: '1px solid red',
}));

export const StyledNumberControlContainer = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));