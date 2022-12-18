// react imports
import * as React from 'react';
// 3rd importspanel
// local imports
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

function TabPanelWrapper(
    props: TabsProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { context } = useTabsContext();

    return (
        <>
            {getTabPanel(props.children!, context, props)}
        </>
    );
}

export default React.forwardRef(TabPanelWrapper);
