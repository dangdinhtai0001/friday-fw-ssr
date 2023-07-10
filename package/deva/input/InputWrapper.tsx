import { forwardRef, ForwardedRef } from 'react';
import Input from '@mui/base/Input';
import { IInputWrapperProps } from './InputWrapper.d';
import { StyledInputSlot, StyledRootSlot } from './StyledElement';

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>,) {
  const { width, inputSlotProps } = props;

  return <Input
    slots={{
      input: StyledInputSlot,
      root: StyledRootSlot
    }}
    slotProps={{
      input: { width, ...inputSlotProps },
    }}
    {...props}
    ref={ref}
  />;
};

export default forwardRef(InputWrapper);
