// react imports
import * as React from 'react';
// 3rd imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
// local imports
import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { TabsProps } from './Tabs.d';
import TabsList from './TabsList';

const getTabHeaderFromChildren = (children: JSX.Element | JSX.Element[] | undefined): JSX.Element | JSX.Element[] | null => {
    if (!children) return null;
    return React.Children.map(children, (child) => {
        if (child.type === TabItem) {
            let { props } = child;
            return <Tab value={props.id} disabled={props.disabled}>
                {props.label}
            </Tab>;
        }

        return null;
    })
}

const getTabPanelFromChildren = (children: JSX.Element | JSX.Element[] | undefined): JSX.Element | JSX.Element[] | null => {
    if (!children) return null;
    return React.Children.map(children, (child) => {
        if (child.type === TabItem) {
            let { props } = child;
            return <TabPanel value={props.id}>
                {props.children}
            </TabPanel>;
        }

        return null;
    })
}

function Tabs(props: TabsProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children } = props;

    return <TabsUnstyled {...props} >
        <TabsList>
            {getTabHeaderFromChildren(children)}
        </TabsList>
        {getTabPanelFromChildren(children)}
    </TabsUnstyled>;
}

export default React.forwardRef(Tabs);