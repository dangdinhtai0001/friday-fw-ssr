// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { BaseComponentProps } from './BaseComponent.d';

const BaseComponent: React.FC<BaseComponentProps> = React.forwardRef((props: BaseComponentProps, ref: React.ForwardedRef<unknown>) => {
    return <></>;
});

export default BaseComponent;