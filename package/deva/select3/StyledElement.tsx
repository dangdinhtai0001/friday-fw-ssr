import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { IStyledOptionProps, IStyledListBoxProps, IStyledToggleProps } from './types.d';
import { createStyledDefaultInput } from '@/package/deva/shared';

export const StyledRoot = styled('div', {})(() => ({
  position: 'relative',
}));

export const StyledListBox = styled('div', {})<IStyledListBoxProps>(({ theme }: IStyledListBoxProps) => ({
  position: "absolute",
  padding: '5px',
  margin: '5px 0 0 0',
  height: 'auto',
  overflow: 'auto',
  zIndex: 1,
  outline: 0,
  listStyle: 'none',

  borderRadius: theme?.components.cornerRadius.medium,
  backgroundColor: theme?.palette.background.default,
}));

export const StyledOption = styled('li', {})<IStyledOptionProps>(({ theme, disabled }) => ({
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

export const StyledToggle = styled('button', {})<IStyledToggleProps>(({ theme }: IStyledToggleProps) => ({
  fontSize: theme?.typography.caption1.fontSize,
  fontWeight: theme?.typography.caption1.fontWeight,
  lineHeight: theme?.typography.caption1.lineHeight,
  letterSpacing: theme?.typography.caption1.letterSpacing,

  position: 'relative',
  borderRadius: theme?.components.cornerRadius.medium,
  textAlign: 'left',
  color: theme?.palette.text.primary,

  width: '100%',
  // background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  // border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  // color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  // position: relative;

  // `${...createStyledDefaultInput(theme)}`
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