// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
// local imports
import { DividerProps } from './Divider.d';

function Divider(
  props: DividerProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { content, theme = 'primary' } = props;

  const classes = classNames(
    `flex-grow border-t`,
    {
      [`bg-th-${theme}`]: theme,
    }
  );

  return (
    <div className="relative flex py-[0.2rem] items-center">
      <div className={classes} />
      <span className="flex-shrink mx-[0.5rem] bg-th-${theme}">{content}</span>
      <div className={classes} />
    </div>
  );
}

export default React.forwardRef(Divider);
