import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';


export const StyledToolbarBlockExt = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: false }),
  padding: `0.5rem 0.5rem 0.5rem 0.5rem`,
  width: ''
}));

