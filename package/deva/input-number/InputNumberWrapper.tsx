import { ForwardedRef, forwardRef } from 'react';
import { IInputNumberWrapperProps } from './types';
import InputWrapper from '@/package/deva/input';
import NumberControl from './NumberControl';

function InputNumberWrapper(
  props: IInputNumberWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { min, max, step, precision, } = props;

  const renderAfterAdornment = () => {
    return (
      <NumberControl />
    );
  }

  return <InputWrapper
    {...props}
    ref={ref}
    endAdornment={renderAfterAdornment()}
  />;
}
export default forwardRef(InputNumberWrapper);
