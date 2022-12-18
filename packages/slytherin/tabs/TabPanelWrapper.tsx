// react imports
import * as React from 'react';
// 3rd importspanel
// local imports
import { TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';
import { getTabPanels } from './TabsUtils';

function TabPanelWrapper(
    props: TabsProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { context } = useTabsContext();

    return (
        <>
            {getTabPanels(props.children!, context, props)}
        </>
    );
}

export default React.forwardRef(TabPanelWrapper);
