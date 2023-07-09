import { forwardRef, ForwardedRef } from 'react';
import Input from '@mui/base/Input';
import Box from '@mui/system/Box';
import { IInputWrapperProps } from './InputWrapper.d';
import { StyledInputSlot, StyledRootSlot } from './StyledElement';

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>,) {
  const { width } = props;

  return <Input
    slots={{
      input: StyledInputSlot,
      root: StyledRootSlot
    }}
    slotProps={{
      input: { width },
    }}
    {...props}
    ref={ref}
  />;
};

export default forwardRef(InputWrapper);
