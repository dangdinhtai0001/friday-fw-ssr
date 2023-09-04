import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { typographyCaption1 } from '@/package/preta/styled-shared';
import { } from './types.d';


export const StyledFloatingFilterContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
}));

export const StyledDisplayContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
  color: '', // Để giá trị sai để nó không ghi đè lên css của grid, còn nếu không set thì sẽ bị typographyCaption1 ghi đè mất 
  textAlign: 'justify',
  // border: '1px solid red',
  width: '100%',
  height: '100%',
  paddingTop: theme?.components.spacing.sx,
}));