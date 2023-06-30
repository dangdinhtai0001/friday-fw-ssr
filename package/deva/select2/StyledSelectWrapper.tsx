import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { IStyledOptionProps, IStyledListboxProps } from './types';

export const StyledListbox = styled(
  'ul',
  {}
)<IStyledListboxProps>(({ theme, hidden }: IStyledListboxProps) => ({
  listStyle: 'none',
  padding: '3px 3px 3px 3px',
  border: `1px solid ${theme?.palette.divider}`,
  borderRadius: theme?.components.cornerRadius.medium,
  overflow: "auto",
  outline: "0px",
  backgroundColor: theme?.palette.background.default,

  // display: hidden ? 'none' : 'block',
  // position: 'relative',
}));

export const StyledOption = styled(
  'li',
  {}
)<IStyledOptionProps>(({ theme, disabled }) => ({
  fontSize: theme?.typography.body1Strong.fontSize,
  fontWeight: theme?.typography.body1Strong.fontWeight,
  lineHeight: theme?.typography.body1Strong.lineHeight,
  letterSpacing: theme?.typography.body1Strong.letterSpacing,

  padding: '3px 10px 3px 3px',
  cursor: "default",

  borderRadius: theme?.components.cornerRadius.medium,

  color: `${disabled ? theme.palette.text.disabled : ''}`,

  transformOrigin: 'center',

  '&:hover': {
    ...(disabled ? {
      cursor: 'not-allowed',
    } : {
      backgroundColor: theme?.palette.background.paper,
      // boxShadow: `2px 2px 5px ${theme?.palette.secondary.main}`,
      cursor: 'pointer',
    }),
  },
}));

export const StyledOptionGroupRoot = styled(
  'li',
  {}
)(() => ({
  listStyleType: 'none',
  paddingLeft: '5px',
}));

export const StyledOptionGroupList = styled(
  'ul',
  {}
)(() => ({
  listStyle: 'none',
  paddingLeft: 0,


}));

export const StyledOptionGroupLabel = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  fontSize: theme?.typography.caption1.fontSize,
  fontWeight: theme?.typography.caption1.fontWeight,
  lineHeight: theme?.typography.caption1.lineHeight,
  letterSpacing: theme?.typography.caption1.letterSpacing,
}));

