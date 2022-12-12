// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Tabs from './Tabs';
import { ContextState, TabsProps } from './Tabs.d';
import { TabsContextProvider } from './TabsContext';

const getTabDefinitions = (props: TabsProps): ContextState => {
  const { value, defaultValue } = props;

  let tabContextInitial: ContextState = {
    activedId: value ? value : defaultValue,
  };

  return tabContextInitial;
};
function TabsWrapper(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  return (
    <TabsContextProvider initialState={getTabDefinitions(props)}>
      <Tabs {...props} ref={ref} />
    </TabsContextProvider>
  );
}

export default React.forwardRef(TabsWrapper);
