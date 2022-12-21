// react imports
import * as React from 'react';
// 3rd imports
import InputUnstyled from '@mui/base/InputUnstyled';
import classNames from 'classnames';
// local imports
import { InputProps } from './Input.d';

function Input(
  props: InputProps,
  ref: React.ForwardedRef<any>
): JSX.Element {

  const { className, disabled } = props;

  const classes = classNames(
    `
      border border-th-foreground h-fit w-fit
      
    `,
    {
      [className!]: className,
      [`opacity-50 cursor-not-allowed`]: disabled,
      [`cursor-text`]: !disabled
    }
  );

  return <InputUnstyled {...props} slotProps={{
    root: () => ({
      className: classes,
    }),
  }} />;
}

export default React.forwardRef(Input);
