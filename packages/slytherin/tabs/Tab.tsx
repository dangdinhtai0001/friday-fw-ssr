// react imports
import * as React from 'react';
// 3rd imports
import TabUnstyled from '@mui/base/TabUnstyled';
// local imports
import { TabProps } from './Tabs.d';

function Tab(props: TabProps, ref: React.ForwardedRef<any>): JSX.Element {
    return <TabUnstyled {...props} />;
}

export default React.forwardRef(Tab);