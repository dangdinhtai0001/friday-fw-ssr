// react imports
import * as React from 'react';
// 3rd imports
import { AnimationControls, useAnimation } from 'framer-motion';
// local imports
import { getAllChildrenByType, _childrenType } from '@packages/ravenclaw';
import TabItem from './TabItem';
import TabPanelWrapper from './TabPanelWrapper';
import { TabsHook, TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';
import TabWrapper from './TabWrapper';

const useTabs = (props: TabsProps): TabsHook => {
    const { children } = props;

    const tabAnimationControls: AnimationControls = useAnimation();

    const { context, helper } = useTabsContext<any>();

    const { activedTabId } = context;

    const handleOnChange = React.useCallback(async (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // kích hoạt sự kiện animation
        await tabAnimationControls.start("animate");

        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        await props.onChange?.(event, tabId, context, helper);


    }, [context, helper, props, tabAnimationControls]);

    const generateTabHeaders = React.useCallback((): _childrenType => {
        return getAllChildrenByType(children, TabItem, (child) => {
            let { props } = child;
            let { id, disabled, label } = props;

            return (
                <TabWrapper value={id} disabled={disabled} isActivedTab={id === activedTabId}>
                    {label}
                </TabWrapper>
            );
        });
    }, [activedTabId, children]);

    const generateTabPanels = React.useCallback((): _childrenType => {
        const { children, destroyInactiveTabPane } = props;

        return getAllChildrenByType(children, TabItem, (child) => {
            let { props } = child;
            let { id } = props;

            if (destroyInactiveTabPane) {
                return activedTabId === id ? (
                    <TabPanelWrapper value={props.id} tabAnimationControls={tabAnimationControls}>{props.children}</TabPanelWrapper>
                ) : null;
            } else {
                return (
                    <TabPanelWrapper value={props.id} tabAnimationControls={tabAnimationControls}>{props.children}</TabPanelWrapper>
                );
            }

        })
    }, [activedTabId, props, tabAnimationControls]);

    return {
        handleOnChange,
        generateTabHeaders,
        generateTabPanels,
    };

};

export default useTabs;