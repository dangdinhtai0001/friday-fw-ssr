import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';

export const StyledInputSlot = styled('input')(({ theme }: { theme: IDefaultTheme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: '1rem',
  padding: '0.8rem 0.5rem',
  backgroundColor: theme.palette.background.default,

  borderRadius: theme.components?.cornerRadius.medium,
  border: `${theme.components?.strokeWidth.thin} solid ${theme.palette.secondary.main}`,


  fontSize: theme.typography.caption1.fontSize,
  fontWeight: theme.typography.caption1.fontWeight,
  lineHeight: theme.typography.caption1.lineHeight,
  letterSpacing: theme.typography.caption1.letterSpacing,

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


