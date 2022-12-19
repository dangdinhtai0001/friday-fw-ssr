// react imports
import * as React from 'react';
// 3rd imports
import {
    useAnimation
} from 'framer-motion';
// local imports
import { ContextState, TabsProps } from './Tabs.d';

const useBaseTabs = (props: TabsProps, context: ContextState, helper: any) => {
    const tabAnimationControls = useAnimation();

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

    return { tabAnimationControls, handleOnChange };
};

export default useBaseTabs;