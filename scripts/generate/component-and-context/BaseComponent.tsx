// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { BaseComponentProps } from './BaseComponent.d';
import { useBaseComponentContext } from './BaseComponentContext';


function BaseComponent(
  props: BaseComponentProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useBaseComponentContext();

  return <></>;
}

export default React.forwardRef(BaseComponent);
