// react imports
import * as React from 'react';
// 3rd importsgetTabHeader
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
import TabHeaders from './TabHeaders';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { ContextState, TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

const getTabPanel = (
  children: JSX.Element | JSX.Element[] | undefined,
  context: ContextState,
  _props: TabsProps
): JSX.Element | JSX.Element[] | null => {
  if (!children) return null;
  return React.Children.map(children, child => {
    if (child.type === TabItem) {
      let { props } = child;

      if (_props.destroyInactiveTabPane) {
        return context.activedId === props.id ? (
          <TabPanel value={props.id}>{props.children}</TabPanel>
        ) : null;
      } else {
        return (
          <TabPanel value={props.id}>{props.children}</TabPanel>
        );
      }
    }

    return null;
  });
};

function Tabs(
  props: TabsProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { onChange, destroyInactiveTabPane, ..._props } = props;

  const { context, helper } = useTabsContext();

  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    tabId: string | number | boolean
  ) => {
    // update lại tab id mỗi khi thay đổi
    helper.commitActivedId(tabId);

    // Gọi hàm onchange từ props
    onChange?.(event, tabId, context, helper);
  };

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
      {getTabPanel(props.children, context, props)}
    </TabsUnstyled>
  );
}

export default React.forwardRef(Tabs);
