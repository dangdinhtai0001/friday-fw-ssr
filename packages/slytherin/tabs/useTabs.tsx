// react imports
import * as React from 'react';
// 3rd imports
import {
    useAnimation
} from 'framer-motion';
// local imports
import { TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';

const useTabs = (props: TabsProps) => {
    const tabAnimationControls = useAnimation();

    const { context, helper } = useTabsContext();

    React.useEffect(() => {
        tabAnimationControls.start('animate');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.activedTabId]);

    const handleOnChange = (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        props.onChange?.(event, tabId, context, helper);
    };

    return { tabAnimationControls, handleOnChange };
};

export default useTabs;