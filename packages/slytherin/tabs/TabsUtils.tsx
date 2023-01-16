// react imports
// 3rd imports
// local imports
import { _childrenType, getAllChildrenByType } from '@packages/ravenclaw';
import Tab from './Tab';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { ContextState, TabsProps } from './Tabs.d';

const getTabInitialContext = (props: TabsProps): ContextState<any> => {
    const { value, defaultValue } = props;

    let tabContextInitial: ContextState<any> = {
        activedTabId: value ? value : defaultValue,
    };

    return tabContextInitial;
};

const getTabHeaders = (
    children: _childrenType, context: ContextState<any>
): JSX.Element | JSX.Element[] | null => {
    return getAllChildrenByType(children!, TabItem, (child) => {
        let { props } = child;
        return (
            <Tab value={props.id} disabled={props.disabled} isActivedTab={props.id === context.activedTabId}>
                {props.label}
            </Tab>
        );
    });
};

const TabVariants = {
    initial: { x: 0, opacity: 1 },
    animate: { x: [100, 0], opacity: [0.5, 1] },
    exit: { x: 100, opacity: 0 },
};

const getTabPanels = (
    _props: TabsProps,
    context: ContextState<any>,
    useTabs: any
): JSX.Element | JSX.Element[] | null => {
    const { children, destroyInactiveTabPane } = _props;
    const { tabAnimationControls } = useTabs;

    return getAllChildrenByType(children, TabItem, (child) => {
        let { props } = child;

        if (destroyInactiveTabPane) {
            return context.activedTabId === props.id ? (
                <TabPanel value={props.id} tabAnimationControls={tabAnimationControls}>{props.children}</TabPanel>
            ) : null;
        } else {
            return (
                <TabPanel value={props.id} tabAnimationControls={tabAnimationControls}>{props.children}</TabPanel>
            );
        }
    });
};

export { getTabInitialContext, getTabHeaders, TabVariants };

