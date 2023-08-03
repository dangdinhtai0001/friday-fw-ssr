import styled from '@mui/system/styled';
import Option, { optionClasses } from '@mui/base/Option';
import Popper from '@mui/base/Popper';

import { IDefaultTheme } from '@/package/preta/types';
import { IStyledListboxProps, IStyledOptionProps, IStyledToggleProps } from './types.d';
import { defaultControllerContainer, typographyCaption1, typographyCaption1Strong, typographyCaption2 } from '@/package/preta/styled-shared';

const optionSelected = (theme?: IDefaultTheme) => ({
  backgroundColor: theme?.palette.primary.main,
  color: theme?.palette.primary.contrastText,
});

export const StyledValue = styled('div', {})(({ theme }: { theme?: IDefaultTheme }) => ({
  ...typographyCaption1({ theme }),

  padding: '0.1rem 0px',
  width: '100%',

}));

export const StyledToggle = styled('button', {})<IStyledToggleProps>(({ theme, width }: IStyledToggleProps) => ({
  ...defaultControllerContainer({ theme, width }),

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-start',
}));

export const StyledListbox = styled('ul', {})<IStyledListboxProps>(({ theme, maxHeight, width }: IStyledListboxProps) => ({
  marginTop: '5px',

  padding: '5px',
  paddingRight: '0px',
  marginRight: '0px',

  overflow: 'auto',
  height: 'auto',
  width: width,

  outline: 0,
  listStyle: 'none',

  border: `1px solid ${theme?.palette.secondary.main}`,

  borderRadius: theme?.components.cornerRadius.medium,
  backgroundColor: theme?.palette.background.default,

  maxHeight: maxHeight
}));

export const StyledOption = styled(Option, {
  shouldForwardProp: (prop) => prop !== 'itemDefs',
})<IStyledOptionProps>(({ theme }: IStyledOptionProps) => ({
  ...typographyCaption1Strong({ theme }),

  // padding: '3px 3px 3px 3px',
  padding: '0.2rem 0.2rem 0.2rem 0.5rem ',
  cursor: "pointer",
  margin: '0.1rem 0.2rem 0rem 0rem',
  width: 'fit',

  borderRadius: theme?.components.cornerRadius.medium,

  // color: `${disabled ? theme?.palette.text.disabled : ''}`,
  // backgroundColor: `${selected ? theme?.palette.primary.main : ''}`,

  transformOrigin: 'center',

  [`&.${optionClasses.selected}`]: {
    ...optionSelected(theme),

    '&:hover': {
      ...optionSelected(theme),
    }
  },

  [`&.${optionClasses.disabled}`]: {
    cursor: 'not-allowed',
    color: theme?.palette.text.disabled,
  },

  '&:hover': {
    backgroundColor: theme?.palette.background.paper
  },
}));

export const StyledPopper = styled(Popper)`
  z-index: 2300;
`;

export const StyledOptionGroupLabel = styled('div', {})
  (({ theme }: { theme?: IDefaultTheme }) => ({
    ...typographyCaption2({ theme }),
    padding: '0.2rem 0rem 0.2rem 0rem',
  }));

export const StyledOptionGroupList = styled('ul', {})(() => ({
  listStyle: 'none',
  paddingLeft: 0,
}));

export const StyledOptionGroupRoot = styled('li', {})(() => ({
  cursor: 'default',
}));