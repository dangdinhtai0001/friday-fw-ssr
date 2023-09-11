import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultComponentContainer, } from '@/package/preta/styled-shared';


export const StyledToolbarBlockExt = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...defaultComponentContainer({ theme, noneBorder: false }),
  padding: `${theme?.components.spacing.sx}`,
  width: '',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'end',
  gap: theme?.components.spacing.sx,
  margin: `${theme?.components.spacing.sNudge} 0px`
}));

