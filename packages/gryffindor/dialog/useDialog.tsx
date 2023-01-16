// react imports
import React from 'react';
// 3rd imports
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import { useAnimation } from 'framer-motion';
import { DialogHook, DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';
import Activator from './collector/Activator';

const useDialog = (props: DialogProps): DialogHook => {
    const { children } = props;

    const { context, helper } = useDialogContext<any>();

    const containerAnimationControls = useAnimation();

    const generateActivator = React.useCallback((): JSX.Element | null => {
        return getChildrenByType(children, Activator);
    }, []);

    const handleOnClickActivator = async () => {
        console.debug("Click activator ");

        helper.commitOpened(true);

        // animation cho sự kiện open
        await containerAnimationControls.start("visible");
    }

    const handleOnClose = async (event: object, reason: "backdropClick" | "escapeKeyDown" | "headerClick"): Promise<any> => {
        // animation cho sự kiện close
        await containerAnimationControls.start("exit");

        // trigger cho sự kiện close
        await props.onClose?.(context, helper, reason);


        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);
    }

    return {
        generateActivator,
        handleOnClickActivator,
        handleOnClose,
        containerAnimationControls,
    };
};

export default useDialog;