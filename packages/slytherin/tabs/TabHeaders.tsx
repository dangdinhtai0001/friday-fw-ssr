// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Tab from './Tab';
import TabItem from './TabItem';
import { TabsProps } from './Tabs.d';
import TabsList from './TabsList';

const getTabHeader = (
    children: JSX.Element | JSX.Element[] | undefined
): JSX.Element | JSX.Element[] | null => {
    if (!children) return null;
    return React.Children.map(children, child => {
        if (child.type === TabItem) {
            let { props } = child;
            return (
                <Tab value={props.id} disabled={props.disabled}>
                    {props.label}
                </Tab>
            );
        }

        return null;
    });
};

function TabHeaders(
    props: TabsProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    return (
        <TabsList
            slotProps={{
                root: () => ({
                    className: 'flex',
                }),
            }}
        >
            {getTabHeader(props.children)}
        </TabsList>
    );
}

export default React.forwardRef(TabHeaders);
