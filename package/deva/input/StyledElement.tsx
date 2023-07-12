import styled from '@mui/system/styled';
import { IDefaultTheme } from '@/package/preta/types';
import { defaultControllerContainer, typographyCaption1 } from '@/package/preta/styled-shared';
import { IStyledRootSlotProps } from './InputWrapper.d';

export const StyledInputSlot = styled('input')(({ theme, width }: { theme: IDefaultTheme, width?: number | string }) => ({
  ...typographyCaption1({ theme }),
  width: '100%',
  flexGrow: 1,
  background: 'inherit',
  border: 'none',
  borderRadius: 'inherit',
  outline: 0,
  boxSizing: 'border-box',

  '&[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
  },
}));

export const StyledRootSlot = styled('div')<IStyledRootSlotProps>(({ theme, width }: IStyledRootSlotProps) => ({
  ...defaultControllerContainer({ theme, width }),

  width: '',
  padding: '0.3rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // firefox
  '&:focus-visible': {
    outline: 0
  }
}));