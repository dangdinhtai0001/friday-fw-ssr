import { ForwardedRef, forwardRef } from 'react';
import { IInputWrapperProps } from './types.d';

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div>
      InputWrapper
    </div>
  );
}

export default forwardRef(InputWrapper);
