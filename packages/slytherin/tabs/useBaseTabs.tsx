// react imports
import * as React from 'react';
// 3rd imports
import {
    AnimationControls,
    useAnimation
} from 'framer-motion';
// local imports
import { getAllChildrenByType } from '@packages/ravenclaw';
import TabItem from './TabItem';
import TabPanel from './TabPanel';
import { ContextHelper, ContextState, TabsProps } from './Tabs.d';

const useBaseTabs = (props: TabsProps, context: ContextState<any>, helper: ContextHelper<any>) => {
    const tabAnimationControls: AnimationControls = useAnimation();

    const handleOnChange = async (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        await props.onChange?.(event, tabId, context, helper);

        // kích hoạt sự kiện animation
        await tabAnimationControls.start("animate");
    };

    const generateTabPanels = (
        _props: TabsProps,
        context: ContextState<any>,
    ): JSX.Element | JSX.Element[] | null => {
        const { children, destroyInactiveTabPane } = _props;

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

    return { tabAnimationControls, handleOnChange, generateTabPanels };
};

export default useBaseTabs;