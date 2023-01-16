// react imports
import * as React from 'react';
// 3rd imports
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// local imports
import { TabsListWrapperProps } from './Tabs.d';

function TabsListWrapper(
    props: TabsListWrapperProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return <TabsListUnstyled {...props} />;
}

export default React.forwardRef(TabsListWrapper);
