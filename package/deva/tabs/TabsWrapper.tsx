import * as React from 'react';
import Tabs from '@mui/base/Tabs';
import { ITabsWrapperProps } from './types.d';
import { StyledTabsList, StyledTab, StyledTabPanel } from './StyledElements';

export default function TabsWrapper(props: ITabsWrapperProps) {
  const { tabDefs, defaultTab } = props;

  const renderTab = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTab key={index} value={tabDef.id}>{tabDef.title}</StyledTab>
      )
    });
  }

  const renderTabPanel = () => {
    return tabDefs.map((tabDef, index) => {
      return (
        <StyledTabPanel key={index} value={tabDef.id}>{tabDef.title} content</StyledTabPanel>
      )
    });

  }

  return (
    <Tabs defaultValue={defaultTab}>
      <StyledTabsList>
        {renderTab()}
        {/* <StyledTab value={0}>My account</StyledTab>
        <StyledTab value={1}>Profile</StyledTab>
        <StyledTab value={2}>Language</StyledTab> */}
      </StyledTabsList>
      {renderTabPanel()}
      {/* <StyledTabPanel value={0}>My account page</StyledTabPanel>
      <StyledTabPanel value={1}>Profile page</StyledTabPanel>
      <StyledTabPanel value={2}>Language page</StyledTabPanel> */}
    </Tabs>
  );
}
