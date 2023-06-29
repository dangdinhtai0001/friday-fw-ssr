import { forwardRef } from 'react';
import Select, { selectClasses, SelectProps, SelectRootSlotProps } from '@mui/base/Select';
import styled from '@mui/system/styled';
import OptionGroup from '@mui/base/OptionGroup';
import Option from '@mui/base/Option';
import Popper from '@mui/base/Popper';
import { InputWrapper } from '../input';
import Input from '@mui/base/Input';
import { IControllerComponentProps } from '@/package/preta/types'

export interface IInputAsSelectRootSlotProps<Tvalue extends {}, Multiple extends boolean>
  extends SelectRootSlotProps<Tvalue, Multiple>, IControllerComponentProps {
  ref: ((instance: Element | null) => void) | null;
}

export const InputAsSelectRootSlot = forwardRef(function InputAsSelectRootSlot<Tvalue extends {}, Multiple extends boolean>(
  props: IInputAsSelectRootSlotProps<Tvalue, Multiple>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { ownerState, ...other } = props;

  return (
    <InputWrapper {...other} ref={ref}>
      {/* {other.children} */}
    </InputWrapper>
  )
})

// ============================================================================================

export const StyledSelect = styled(Select, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));

export const StyledOptionGroup = styled(OptionGroup, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));

export const StyledOption = styled(Option, {
  shouldForwardProp: prop => prop !== 'itemDefs',
})(() => ({

}));

const Button = forwardRef(function Button<TValue extends {}, Multiple extends boolean,>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      {/* <UnfoldMoreRoundedIcon /> */}
    </button>
  );
});

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

export const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;
  box-shadow: 0px 2px 24px ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

export const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

export const StyledPopper = styled(Popper)`
  z-index: 1;
`;