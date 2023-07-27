import { forwardRef, ForwardedRef } from 'react';
import Tabs from '@mui/base/Tabs';
import { ITabsWrapperProps } from './types.d';
import { StyledTabsList, StyledTab, StyledTabPanel } from './StyledElements';

function TabsWrapper(props: ITabsWrapperProps, ref: ForwardedRef<unknown>) {
  const {
    tabDefs,
    defaultTab = tabDefs[0].id,
    value,
    onChange,
    orientation = 'horizontal'
  } = props;

  const renderTab = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTab key={index} value={tabDef.id}>{tabDef.title}</StyledTab>
      )
    });
  };

  const renderTabPanel = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTabPanel key={index} value={tabDef.id}>{tabDef.title} content</StyledTabPanel>
      )
    });
  };

  const handleOnChangeTab = (_: any, value: string | number | null) => {
    onChange?.(value);
  }

  return (
    <Tabs
      defaultValue={defaultTab}
      value={value}
      onChange={handleOnChangeTab}
      orientation={orientation}
    >
      <StyledTabsList>
        {renderTab()}
      </StyledTabsList>
      {renderTabPanel()}
    </Tabs>
  );
}

export default forwardRef(TabsWrapper);
