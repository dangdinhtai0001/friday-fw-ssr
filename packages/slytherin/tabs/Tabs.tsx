// react imports
import * as React from 'react';
// 3rd imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
import { TabsProps } from './Tabs.d';

function Tabs(props: TabsProps, ref: React.ForwardedRef<any>): JSX.Element {
    return <TabsUnstyled {...props} />;
}

export default React.forwardRef(Tabs);