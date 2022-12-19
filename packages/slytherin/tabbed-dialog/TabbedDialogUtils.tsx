import { containerVariants, getActivator, getContent, getDialogInitialContext, getExtraHeader, renderDialogActions } from '@packages/slytherin/dialog/DialogUtils';
import { getTabInitialContext } from '@packages/slytherin/tabs/TabsUtils';
import { ContextState, TabbedDialogProps } from './TabbedDialog.d';

const getTabbedInitialContext = (props: TabbedDialogProps): ContextState => {
    return {
        ...getDialogInitialContext(props),
        ...getTabInitialContext(props)
    }
}

export { getActivator, containerVariants, getExtraHeader, renderDialogActions, getTabbedInitialContext, getContent };

