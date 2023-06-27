import { forwardRef, ForwardedRef } from 'react';
import Input from '@mui/base/Input';
import { IInputWrapperProps } from './InputWrapper.d';
import { StyledInputElement } from './StyledElement';

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>,) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
};

export default forwardRef(InputWrapper);
