import styled from '@mui/system/styled';

export const StyledInputElement = styled('input')(({ theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: '0.2rem 0.2rem 0.2rem 0.2rem',
  borderRadius: theme.shape.borderRadius,
}));

