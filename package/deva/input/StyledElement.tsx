import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer } from '@/package/preta/styled-shared';

export const StyledInputSlot = styled('input')(({ theme, width }: { theme: IDefaultTheme, width?: number | string }) => ({
  ...defaultControllerContainer({ theme, width }),

  boxSizing: 'border-box',

  ':focus-within': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 1px ${theme.palette.primary.dark}`
  },

  ':hover': {
    borderColor: theme.palette.primary.main,
  }
}));

export const StyledRootSlot = styled('div')(({ theme }: { theme: IDefaultTheme }) => ({

}));