// react imports
// 3rd imports
// local imports
import { getAllChildrenByType } from '@packages/ravenclaw';
import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { ContextState, TabsProps } from './Tabs.d';

const getTabInitialContext = (props: TabsProps): ContextState => {
    const { value, defaultValue } = props;

    let tabContextInitial: ContextState = {
        activedTabId: value ? value : defaultValue,
    };

    return tabContextInitial;
};

const getTabHeaders = (
    children?: JSX.Element | JSX.Element[] | null
): JSX.Element | JSX.Element[] | null => {
    return getAllChildrenByType(children!, TabItem, (child) => {
        let { props } = child;
        return (
            <Tab value={props.id} disabled={props.disabled}>
                {props.label}
            </Tab>
        );
    });
};

const TabVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
};

const getTabPanels = (
    children: JSX.Element | JSX.Element[] | undefined,
    context: ContextState,
    _props: TabsProps
): JSX.Element | JSX.Element[] | null => {
    return getAllChildrenByType(children!, TabItem, (child) => {
        let { props } = child;

        if (_props.destroyInactiveTabPane) {
            return context.activedTabId === props.id ? (
                <TabPanel value={props.id}>{props.children}</TabPanel>
            ) : null;
        } else {
            return (
                <TabPanel value={props.id}>{props.children}</TabPanel>
            );
        }
    });
};

export { getTabInitialContext, getTabHeaders, TabVariants, getTabPanels };

