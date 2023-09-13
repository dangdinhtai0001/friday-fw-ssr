import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer } from '@/package/preta/styled-shared';

export const StyledPaginationBlockRoot = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: false }),
}));
