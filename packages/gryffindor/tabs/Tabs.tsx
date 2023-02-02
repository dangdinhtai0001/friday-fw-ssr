// react imports
import * as React from 'react';
// 3rd imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
import { TabsProps } from './Tabs.d';
import TabsListWrapper from './TabsListWrapper';
import useTabs from './useTabs';


function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const { onChange, destroyInactiveTabPane, ..._props } = props;

  const { handleOnChange, generateTabHeaders, generateTabPanels } = useTabs(props);

  return (
    <TabsUnstyled
      {..._props}
      onChange={async (
        event: React.SyntheticEvent<Element, Event>,
        value: string | number | boolean
      ) => {
        await handleOnChange(event, value);
      }}
      slotProps={{
        root: () => ({
          className: 'w-full h-full'
        })
      }}

    >
      {/* ================================== || Header || ================================== */}
      <TabsListWrapper
        slotProps={{
          root: () => ({
            className: 'flex',
          }),
        }}
      >
        {generateTabHeaders()}
      </TabsListWrapper>
      {/* ================================== || Panel || ================================== */}
      {generateTabPanels()}
    </TabsUnstyled>
  );
}

export default React.forwardRef(Tabs);
