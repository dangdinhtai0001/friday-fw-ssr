import styled from '@mui/system/styled';

export const StyledInputElement = styled('input')(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: '0.2rem 0.2rem 0.2rem 0.2rem',
  borderRadius: '0.2rem',
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.main,
  color: theme.palette.text,
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0.15rem 0.1rem ${theme.palette.primary.main}`,
  },
}));

