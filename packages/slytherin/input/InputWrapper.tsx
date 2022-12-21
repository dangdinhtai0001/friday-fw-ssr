// react imports
import * as React from 'react';
// 3rd imports
import InputUnstyled from '@mui/base/InputUnstyled';
// local imports
import { InputProps } from './Input.d';
import InputElement from './InputElement';

function InputWrapper(
  props: InputProps,
  ref: React.ForwardedRef<any>
): JSX.Element {

  return <InputUnstyled slots={{ input: InputElement }} {...props} ref={ref} />;
}

export default React.forwardRef(InputWrapper);
