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

  const { className, ownerState, ..._props } = props;
  const { disabled, readOnly } = _props;

  const classes = classNames(
    `
      border-[0.1rem] border-th-foreground 
      h-full w-full
      px-[0.1rem] py-[0.1rem]
      rounded-[0.3rem]
      focus:outline-none focus:ring focus:border-th-primary focus:border-0
      hover:border-th-primary
    `,
    {
      [className!]: className,
      [`opacity-50 cursor-not-allowed`]: disabled,
      [`cursor-not-allowed`]: readOnly,
      [`cursor-text`]: !disabled
    }
  );

  return <input className={classes} ref={ref} {..._props} />;
}

export default React.forwardRef(Input);
