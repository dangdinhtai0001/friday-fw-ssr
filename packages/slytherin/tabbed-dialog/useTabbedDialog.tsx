// react imports
// 3rd imports
// local imports
import useBaseDialog from '@packages/slytherin/dialog/useBaseDialog';
import useBaseTabs from '@packages/slytherin/tabs/useBaseTabs';
import { TabbedDialogProps } from './TabbedDialog.d';
import { useTabbedDialogContext } from './TabbedDialogContext';

const useTabbedDialog = (props: TabbedDialogProps) => {
    const { context, helper } = useTabbedDialogContext();

    const { containerAnimationControls, handleOnClose, handleOnClickActivator, handleOnActiveAction } = useBaseDialog(props, context, helper);
    const { handleOnChange: handleOnChangeTab, tabAnimationControls, generateTabPanels } = useBaseTabs(props, context, helper);

    return {
        containerAnimationControls,
        handleOnClose,
        handleOnClickActivator,
        handleOnActiveAction,
        handleOnChangeTab,
        tabAnimationControls,
        generateTabPanels
    }
};

export default useTabbedDialog;