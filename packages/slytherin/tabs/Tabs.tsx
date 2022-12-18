// react imports
import * as React from 'react';
// 3rd importsgetTabHeader
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
// import useTabs from '@packages/hufflepuff/tabs-family/useTabs';
import TabHeaders from './TabHeaders';
import TabPanelWrapper from './TabPanelWrapper';
import { TabsProps } from './Tabs.d';
import useTabs from './useTabs';

function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const { onChange, destroyInactiveTabPane, ..._props } = props;

  const { handleOnChange } = useTabs(props);

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
