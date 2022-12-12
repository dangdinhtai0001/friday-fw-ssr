// react imports
import * as React from 'react';
// 3rd imports
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// local imports
import { TabListProps } from './Tabs.d';

function TabList(
  props: TabListProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  return <TabsListUnstyled {...props} />;
}

export default React.forwardRef(TabList);
