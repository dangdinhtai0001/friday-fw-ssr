// react imports
import React from 'react';
// 3rd imports
// local imports
import { TabHeaderProps } from './interface';
import { useTabContext } from './TabContext'

const TabHeader = (props: TabHeaderProps) => {

    const { context } = useTabContext();
    const { tabs } = context;

    // ------------------------- || render function || -------------------------
    return (
        <div>
           
        </div>
    );
}

export default TabHeader;