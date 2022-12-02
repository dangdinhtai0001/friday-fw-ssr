// react imports
import * as React from 'react';
// 3rd imports
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
// local imports
import { TabPanelProps } from './Tabs.d';

function TabPanel(props: TabPanelProps, ref: React.ForwardedRef<any>): JSX.Element {
    return <TabPanelUnstyled {...props} />;
}

export default React.forwardRef(TabPanel);