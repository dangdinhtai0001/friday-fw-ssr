// react imports
import * as React from 'react';
// 3rd importsgetTabHeader
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
// import useTabs from '@packages/hufflepuff/tabs-family/useTabs';
import { TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';
import TabsList from './TabsList';
import { getTabHeaders, getTabPanels } from './TabsUtils';
import useTabs from './useTabs';

function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  // eslint-disable-next-line no-unused-vars
  const { onChange, destroyInactiveTabPane, ..._props } = props;

  const { context } = useTabsContext();

  const { handleOnChange, tabAnimationControls } = useTabs(props);

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
      {/* ================================== || Header || ================================== */}
      <TabsList
        slotProps={{
          root: () => ({
            className: 'flex',
          }),
        }}
      >
        {getTabHeaders(props.children, context)}
      </TabsList>
      {/* ================================== || Panel || ================================== */}
      {getTabPanels(props, context, { tabAnimationControls })}
    </TabsUnstyled>
  );
}

export default React.forwardRef(Tabs);
