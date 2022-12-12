// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { BaseComponentProps } from './BaseComponent.d';

function BaseComponent(
  props: BaseComponentProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  return <></>;
}

export default React.forwardRef(BaseComponent);
