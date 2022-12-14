// react imports
import * as React from 'react';
// 3rd imports
// local imports
import BaseComponent from './BaseComponent';
import { BaseComponentProps } from './BaseComponent.d';
import { BaseComponentContextProvider } from './BaseComponentContext';

function getInitialContext(props: BaseComponentProps) {
    return {};
}

function BaseComponentWrapper(
    props: BaseComponentProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <BaseComponentContextProvider initialState={getInitialContext(props)}>
            <BaseComponent {...props} ref={ref} />
        </BaseComponentContextProvider>
    );
}

export default React.forwardRef(BaseComponentWrapper);
