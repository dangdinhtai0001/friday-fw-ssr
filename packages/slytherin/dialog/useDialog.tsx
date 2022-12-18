// react imports
import * as React from 'react';
// 3rd imports
import {
    useAnimation
} from 'framer-motion';
// local imports
import { DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';

const useDialog = (props: DialogProps) => {
    const containerAnimationControls = useAnimation();
    const { context, helper } = useDialogContext();

    React.useEffect(() => {
        containerAnimationControls.start('visible');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.opened]);

    const handleOnClose = async (event: object, reason: "backdropClick" | "escapeKeyDown" | "headerClick"): Promise<any> => {
        // animation cho sự kiện close
        await containerAnimationControls.start("exit");

        // trigger cho sự kiện close
        await props.onClose?.(context, helper, reason);


        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);
    }

    const handleOnClickActivator = () => {
        console.debug("Click activator ");
        helper.commitOpened(true);
    }

    const handleOnActiveAction = async (event: React.MouseEvent<unknown, MouseEvent>, key: string) => {
        await props.onActiveAction?.(event, key, context, helper);
    }

    return { containerAnimationControls, handleOnClose, handleOnClickActivator, handleOnActiveAction }
};

export default useDialog;