// react imports
import React from 'react';
// 3rd imports
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import { AnimationControls, useAnimation } from 'framer-motion';
import Activator from './collector/Activator';
import { DialogHook, DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';

const useDialog = (props: DialogProps): DialogHook => {
    const { children } = props;

    const { context, helper } = useDialogContext<any>();

    const containerAnimationControls: AnimationControls = useAnimation();

    const generateActivator = React.useCallback((): JSX.Element | null => {
        return getChildrenByType(children, Activator);
    }, []);

    React.useEffect(() => {
        // Không rõ vì sao nếu gọi `containerAnimationControls.start` tại hàm click thì lỗi, 
        // nhưng gọi trong useEffect thì lại chạy đc
        if (context.opened) {
            // animation cho sự kiện open
            containerAnimationControls.start("visible")
        }

        return () => { };

    }, [containerAnimationControls, context.opened])

    const handleOnClickActivator = async () => {
        console.debug("Click activator ");

        helper.commitOpened(true);
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