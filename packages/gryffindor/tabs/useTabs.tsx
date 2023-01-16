// react imports
import * as React from 'react';
// 3rd imports
import { AnimationControls, useAnimation } from 'framer-motion';
// local imports
import { _childrenType, getAllChildrenByType } from '@packages/ravenclaw';
import TabItem from './TabItem';
import TabPanelWrapper from './TabPanelWrapper';
import TabWrapper from './TabWrapper';
import { TabsHook, TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

const useTabs = (props: TabsProps): TabsHook => {
    const { children } = props;

    const tabAnimationControls: AnimationControls = useAnimation();

    const { context, helper } = useTabsContext<any>();

    const { activedTabId } = context;

    const handleOnChange = (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        props.onChange?.(event, tabId, context, helper);

        // kích hoạt sự kiện animation
        tabAnimationControls.start("animate");
    };

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
    }, [activedTabId]);

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
    }, [activedTabId]);

    return {
        handleOnChange,
        generateTabHeaders,
        generateTabPanels,
    };

};

export default useTabs;