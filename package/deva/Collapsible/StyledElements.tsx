import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';

export const StyledCollapsibleContent = styled('div', {})(
  ({ theme, maxHeight, open }: { theme?: IDefaultTheme, maxHeight?: string | number, open: boolean }) => ({
    overflow: 'auto',
    maxHeight: maxHeight,
    height: open ? '' : '0px'
  })
);

