// react imports
import React from 'react';
// 3rd imports
// local imports
import { TabsProps, TabPanelProps } from './core/interface';
import TabHeaders from './core/TabHeaders';
import TabPanel from './core/TabPanel'
import { TabContextProvider } from './core/TabContext';

const getTabMetadataFromChildren = (children) => {
    let tabs: any[] = [];
    React.Children.forEach(children, child => {
        if (child && child.type === Tabs.TabPanel) {
            tabs.push(child?.props);
        }
    });

    return tabs;
}

const Tabs = (props: TabsProps) => {
    const { children } = props;

   ;

    // ------------------------- || render function || -------------------------
    return (
        <TabContextProvider initialState={{ tabs: getTabMetadataFromChildren(children) }} >
            <div>
                <TabHeaders></TabHeaders>
            </div>
        </TabContextProvider >
    );
}

Tabs.TabPanel = (props: TabPanelProps) => {
    return < TabPanel {...props} />;
};

export default Tabs;