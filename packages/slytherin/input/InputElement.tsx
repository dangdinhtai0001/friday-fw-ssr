// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
// local imports
import { InputProps } from './Input.d';

function Input(
  props: InputProps,
  ref: React.ForwardedRef<any>
): JSX.Element {

  const { className, ..._props } = props;
  const { disabled } = _props;

  const classes = classNames(
    `
      border border-th-foreground 
      h-fit w-fit
      px-[0.1rem] py-[0.1rem]
      rounded-[0.3rem]
      focus:outline-none focus:ring focus:border-th-primary 
      hover:border-th-primary
    `,
    {
      [className!]: className,
      [`opacity-50 cursor-not-allowed`]: disabled,
      [`cursor-text`]: !disabled
    }
  );

  return <input className={classes} ref={ref} {..._props} />;
}

export default React.forwardRef(Input);
