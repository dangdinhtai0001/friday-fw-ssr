// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { BaseComponentProps } from './BaseComponent.d';
import { useBaseComponentContext } from './BaseComponentContext';
import useBaseComponent from './useBaseComponent';


function BaseComponent(
  props: BaseComponentProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context, helper } = useBaseComponentContext();
  const { } = useBaseComponent(props);

  return <></>;
}

export default React.forwardRef(BaseComponent);
