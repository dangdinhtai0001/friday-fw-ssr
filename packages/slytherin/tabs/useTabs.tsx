// react imports
// 3rd imports
// local imports
import { TabsProps } from './Tabs.d';
import { useTabsContext } from './TabsContext';
import useBaseTabs from './useBaseTabs';

const useTabs = (props: TabsProps) => {
    const { context, helper } = useTabsContext();

    const _baseTabsHooks = useBaseTabs(props, context, helper);

    return { ..._baseTabsHooks };
};

export default useTabs;