import { forwardRef, ForwardedRef } from 'react';
import clsx from 'clsx';
import { IBackDropProps } from './types.d';

function BackDrop(
  props: IBackDropProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
}

export default forwardRef<HTMLDivElement, IBackDropProps>(BackDrop);
