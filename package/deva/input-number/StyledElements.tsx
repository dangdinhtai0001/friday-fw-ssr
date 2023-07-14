import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';

export const StyledAdornmentContainer = styled('div')(({ theme }: { theme?: IDefaultTheme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}));