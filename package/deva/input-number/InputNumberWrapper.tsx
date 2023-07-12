import { ForwardedRef, forwardRef } from 'react';
import { IInputNumberWrapperProps } from './types';
import InputWrapper from '@/package/deva/input';

function InputNumberWrapper(
  props: IInputNumberWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { min, max, step, precision } = props;

  const renderAfterAdornment = () => {
    return <div>kg</div>
  }

  return <InputWrapper
    {...props}
    ref={ref}
    endAdornment={renderAfterAdornment()}
  />;
}
export default forwardRef(InputNumberWrapper);
