// react imports
import React from 'react';
// 3rd imports
// local imports
import { TabPanelListProps } from './interface';
import { useTabContext } from './TabContext'
import TabPanel from './TabPanel';

const TabPanelList = (props: TabPanelListProps) => {

    const { context } = useTabContext();
    const { tabs, activeKey } = context;

    // ------------------------- || render function || -------------------------
    return (
        <div>
            {
                tabs.map((item, index) => {
                    if (item.key === activeKey) {
                        let _item = {
                            ...item,
                            index: index
                        };

                       

                        return (
                            <TabPanel {..._item} />
                        )
                    } else {
                        return null;
                    }
                })
            }
        </div>
    );
}

export default TabPanelList;