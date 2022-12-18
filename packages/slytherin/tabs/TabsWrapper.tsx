// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Tabs from './Tabs';
import { TabsProps } from './Tabs.d';
import { TabsContextProvider } from './TabsContext';
import { getTabInitialContext } from './TabsUtils';

function TabsWrapper(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  return (
    <TabsContextProvider initialState={getTabInitialContext(props)}>
      <Tabs {...props} ref={ref} />
    </TabsContextProvider>
  );
}

export default React.forwardRef(TabsWrapper);
