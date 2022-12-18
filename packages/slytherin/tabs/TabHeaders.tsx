// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { TabsProps } from './Tabs.d';
import TabsList from './TabsList';
import { getTabHeaders } from './TabsUtils';

function TabHeaders(
    props: TabsProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return (
        <TabsList
            slotProps={{
                root: () => ({
                    className: 'flex',
                }),
            }}
        >
            {getTabHeaders(props.children)}
        </TabsList>
    );
}

export default React.forwardRef(TabHeaders);
