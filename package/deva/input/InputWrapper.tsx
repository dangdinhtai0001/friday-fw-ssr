import { forwardRef, ForwardedRef, ChangeEvent } from 'react';
import Input from '@mui/base/Input';
import { IInputWrapperProps } from './InputWrapper.d';
import { StyledInputSlot, StyledRootSlot } from './StyledElement';


function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>,) {
  const { width, inputSlotProps, onChange, value } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  return <Input
    {...props}
    slots={{
      input: StyledInputSlot,
      root: StyledRootSlot
    }}
    slotProps={{
      input: { width, onChange: handleOnChange, ...inputSlotProps },
    }}
    value={value}
    ref={ref}
  />;
};

export default forwardRef(InputWrapper);
