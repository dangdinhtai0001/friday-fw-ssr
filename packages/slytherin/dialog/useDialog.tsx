// react imports
// 3rd imports
// local imports
import { DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';
import useBaseDialog from './useBaseDialog';

const useDialog = (props: DialogProps) => {
    const { context, helper } = useDialogContext();

    const { containerAnimationControls, handleOnClose, handleOnClickActivator, handleOnActiveAction } = useBaseDialog(props, context, helper);

    return { containerAnimationControls, handleOnClose, handleOnClickActivator, handleOnActiveAction }
};

export default useDialog;