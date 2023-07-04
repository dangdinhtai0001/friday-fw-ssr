import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { IStyledOptionProps, IStyledListBoxProps, IStyledToggleProps } from './types.d';
import { CONTROLLER_INPUT_PADDING } from '@/package/preta/constant';
import { defaultControllerContainer, typographyCaption1, typographyBody1Strong } from '../shared';


export const StyledRoot = styled('div', {})(() => ({
  position: 'relative',
}));

export const StyledListBox = styled('div', {})<IStyledListBoxProps>(({ theme, maxHeight }: IStyledListBoxProps) => ({
  position: "absolute",
  padding: '5px',
  margin: '5px 0 0 0',
  height: 'auto',
  // width: '100%',
  overflow: 'auto',
  zIndex: 1,
  outline: 0,
  listStyle: 'none',

  // border: '2px solid red',

  borderRadius: theme?.components.cornerRadius.medium,
  backgroundColor: theme?.palette.background.default,

  maxHeight: maxHeight
}));

export const StyledOption = styled('li', {})<IStyledOptionProps>(({ theme, disabled, selected }) => ({
  ...typographyBody1Strong({ theme }),

  padding: '3px 10px 3px 3px',
  cursor: "default",

  borderRadius: theme?.components.cornerRadius.medium,

  color: `${disabled ? theme.palette.text.disabled : ''}`,
  backgroundColor: `${selected ? theme.palette.primary.main : ''}`,

  transformOrigin: 'center',

  '&:hover': {
    ...(disabled ? {
      cursor: 'not-allowed',
    } : {
      backgroundColor: selected ? '' : theme?.palette.background.paper,
      cursor: 'pointer',
    }),
  },
}));

export const StyledToggle = styled('button', {})<IStyledToggleProps>(({ theme }: IStyledToggleProps) => ({
  ...defaultControllerContainer({ theme }),

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledOptionGroupLabel = styled(
  'div',
  {}
)(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),
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