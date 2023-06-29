import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';

export const StyledListbox = styled(
  'ul',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  listStyle: 'none',
  padding: '10px 10px 10px 10px',
  border: `1px solid ${theme?.palette.divider}`,
  borderRadius: theme?.components.cornerRadius.medium,
}));

export const StyledOption = styled(
  'li',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  fontSize: theme?.typography.caption1Strong.fontSize,
  fontWeight: theme?.typography.caption1Strong.fontWeight,
  lineHeight: theme?.typography.caption1Strong.lineHeight,
  letterSpacing: theme?.typography.caption1Strong.letterSpacing,

  padding: '3px',
  border: `1px solid ${theme?.palette.divider}`,
  borderRadius: theme?.components.cornerRadius.medium,

  '&:hover': {
    backgroundColor: theme?.palette.primary.light,
    cursor: 'pointer',
  },
}));

export const StyledOptionGroupRoot = styled(
  'li',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  listStyle: 'none',
  paddingLeft: 0,
}));

export const StyledOptionGroupList = styled(
  'ul',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  listStyle: 'none',
  paddingLeft: 0,

  '&::before': {
    content: 'none',
  },

  li: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 10,
  },
}));

export const StyledOptionGroupLabel = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  backgroundColor: theme?.palette.background.paper,

  fontSize: theme?.typography.caption1.fontSize,
  fontWeight: theme?.typography.caption1.fontWeight,
  lineHeight: theme?.typography.caption1.lineHeight,
  letterSpacing: theme?.typography.caption1.letterSpacing,
}));
