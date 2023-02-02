// react imports
import React from 'react';
// 3rd imports
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import { Button } from '@packages/slytherin/button';
import { AnimationControls, useAnimation } from 'framer-motion';
import Activator from './collector/Activator';
import Content from './collector/Content';
import ExtraHeader from './collector/ExtraHeader';
import { ActionDef, ActivedActionResponse, CloseReason, DialogHook, DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';

const useDialog = (props: DialogProps): DialogHook => {
    const { actions, children } = props;

    const { context, helper } = useDialogContext<any>();

    const containerAnimationControls: AnimationControls = useAnimation();

    const generateActivator = React.useCallback((): JSX.Element | null => {
        return getChildrenByType(children, Activator);
    }, [children]);

    React.useEffect(() => {
        // Không rõ vì sao nếu gọi `containerAnimationControls.start` tại hàm click thì lỗi, 
        // nhưng gọi trong useEffect thì lại chạy đc
        if (context.opened) {
            // animation cho sự kiện open
            containerAnimationControls.start("visible")
        }

        return () => { };

    }, [containerAnimationControls, context.opened]);

    const handleOnClickActivator = React.useCallback(async () => {
        console.debug("Click activator ");

        helper.commitOpened(true);
    }, [helper]);

    const handleOnClose = React.useCallback(async (event: object, reason: CloseReason): Promise<any> => {
        // animation cho sự kiện close
        await containerAnimationControls.start("exit");

        // trigger cho sự kiện close
        await props.onClose?.(context, helper, reason);

        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);
    }, [containerAnimationControls, context, helper, props]);

    const handleOnActiveAction = React.useCallback(async (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>, actionDef: ActionDef) => {
        let actionResponse: ActivedActionResponse | undefined = await props.onActiveAction?.(event, actionDef, context, helper);

        if (actionDef.isClose || actionResponse?.isClose === true) {
            // Nếu action đc cấu hình là action close thì luôn gọi animation close
            // Nếu action trả về kết quả yêu cầu close dialog thì gọi animation close
            await handleOnClose(event, "activeAction");
        }
    }, [context, handleOnClose, helper, props])

    const extraHeader = React.useMemo(() => {
        return getChildrenByType(children, ExtraHeader);
    }, [children]);

    const content = React.useMemo(() => {
        return getChildrenByType(children, Content);
    }, [children]);

    const footer = React.useMemo(() => {
        if (!actions || actions.length <= 0 || !containerAnimationControls) {
            return null;
        }

        return actions.map((actionDef) => {
            const { key, component, disabled, visible, label, others } = actionDef;
            if (component) {
                return (
                    <div key={key}>
                        visible && {React.cloneElement(component, { ...others, onClick: handleOnActiveAction, disabled })}
                    </div>
                );
            } else {
                return (
                    <div key={key}>
                        {visible && <Button
                            {...others}
                            onClick={async (e) => { await handleOnActiveAction?.(e, actionDef) }}
                            disabled={disabled}
                        >
                            {label}
                        </Button>}
                    </div>
                );
            }

        });
    }, [actions, containerAnimationControls, handleOnActiveAction]);

    return {
        generateActivator,
        handleOnClickActivator,
        handleOnClose,
        containerAnimationControls,
        extraHeader,
        content,
        footer
    };
}

export default useDialog;