// react imports
import React from 'react';
// 3rd imports
// local imports
import { TabsProps, TabDefine } from './core/interface';
import TabHeaders from './core/TabHeaders';
import TabPanelList from './core/TabPanelList';
import TabPanel from './core/TabPanel'
import { TabContextProvider } from './core/TabContext';

const getTabInitialContextState = (props: TabsProps) => {
    // get tabs
    let tabs: any[] = [];
    React.Children.forEach(props.children, child => {
        if (child && child.type === Tabs.TabPanel) {
            tabs.push({ ...child?.props, key: child.key, _key: child.key });
        }
    });

    // get activeKey
    let activeKey = props.defaultActiveKey ? props.defaultActiveKey : tabs[0]?.key;

    return { tabs, activeKey };
}

const Tabs = (props: TabsProps) => {
    const { children } = props;

    // ------------------------- || render function || -------------------------
    return (
        <TabContextProvider initialState={getTabInitialContextState(props)} >
            {/* <div className='w-full h-full'> */}
            <>
                <TabHeaders />
                <TabPanelList />
            </>
            {/* </div> */}
        </TabContextProvider >
    );
}

Tabs.TabPanel = (props: TabDefine) => {
    return < TabPanel {...props} />;
};

export default Tabs;