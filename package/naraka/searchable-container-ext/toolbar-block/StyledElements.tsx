import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';


export const StyledToolbarBlockExt = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: true }),
  padding: `0.5rem 0.5rem 0.5rem 0.5rem`,
  width: '',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'end',
  gap: "0.3rem"
}));

