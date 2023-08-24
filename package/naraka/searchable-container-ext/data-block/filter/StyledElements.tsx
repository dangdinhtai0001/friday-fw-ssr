import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';
import { } from './types.d';


export const StyledFilterContainer = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  padding: `${theme?.components.spacing.s}`
}));