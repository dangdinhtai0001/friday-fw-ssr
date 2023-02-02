// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Tabs from './Tabs';
import { ContextState, TabsProps } from './Tabs.d';
import { TabsContextProvider } from './TabsContext';

function getInitialContext(props: TabsProps): ContextState<any> {
    const { value, defaultValue } = props;

    let tabContextInitial: ContextState<any> = {
        activedTabId: value ? value : defaultValue,
        defaultActiveId: defaultValue ? defaultValue : value
    };

    return tabContextInitial;
}

function TabsWrapper(
    props: TabsProps,
    ref: React.ForwardedRef<any>
): JSX.Element {

    return (
        <TabsContextProvider initialState={getInitialContext(props)}>
            <Tabs {...props} ref={ref} />
        </TabsContextProvider>
    );
}

export default React.forwardRef(TabsWrapper);
