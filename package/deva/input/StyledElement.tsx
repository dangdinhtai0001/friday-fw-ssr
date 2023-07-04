import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer } from '../shared';

export const StyledInputSlot = styled('input')(({ theme }: { theme: IDefaultTheme }) => ({
  ...defaultControllerContainer({ theme }),

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