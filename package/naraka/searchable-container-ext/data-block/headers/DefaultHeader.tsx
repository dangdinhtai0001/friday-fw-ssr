import { forwardRef, useImperativeHandle, ForwardedRef } from 'react';
import { IDefaultHeaderProps, IDefaultHeaderRef } from './types.d';

function DefaultHeader(props: IDefaultHeaderProps, ref: ForwardedRef<IDefaultHeaderRef>) {

  const { displayName } = props;

  useImperativeHandle(ref, () => ({
    refresh(props: IDefaultHeaderProps): boolean {
      return true;
    }
  }));

  return (
    <div>
      {displayName}-{displayName}
    </div>
  );
}

export default forwardRef(DefaultHeader);
