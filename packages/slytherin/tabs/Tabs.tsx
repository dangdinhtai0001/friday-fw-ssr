// react imports
import * as React from 'react';
// 3rd importsgetTabHeader
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
import useTabs from '@packages/hufflepuff/tabs-family/useTabs';
import TabHeaders from './TabHeaders';
import TabPanelWrapper from './TabPanelWrapper';
import { TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { onChange, destroyInactiveTabPane, ..._props } = props;

  const { context, helper } = useTabsContext();
  const { handleOnChange } = useTabs(props, context, helper);

  return (
    <TabsUnstyled
      {..._props}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        value: string | number | boolean
      ) => {
        handleOnChange(event, value);
      }}
      slotProps={{
        root: () => ({
          className: 'w-full h-full'
        })
      }}
    >
      <TabHeaders {...props} />
      <TabPanelWrapper {...props} />
    </TabsUnstyled>
  );
}

export default React.forwardRef(Tabs);
