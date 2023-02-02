// react imports
import React from 'react';
// 3rd imports
import { AnimationControls, useAnimation } from 'framer-motion';
// local imports
import { ActionDef, ActivedActionResponse, CloseReason } from '@packages/gryffindor/dialog/Dialog.d';
import TabPanelWrapper from '@packages/gryffindor/tabs/TabPanelWrapper';
import TabsListWrapper from '@packages/gryffindor/tabs/TabsListWrapper';
import TabWrapper from '@packages/gryffindor/tabs/TabWrapper';
import { getAllChildrenByType, getChildrenByType, _childrenType } from '@packages/ravenclaw';
import { Button } from '@packages/slytherin/button';
import Activator from './collector/Activator';
import TabItem from './collector/TabItem';
import { TabbedDialogHook, TabbedDialogProps } from './TabbedDialog.d';
import { useTabbedDialogContext } from './TabbedDialogContext';

const useTabbedDialog = (props: TabbedDialogProps): TabbedDialogHook => {
    const { actions, children, onChange, destroyInactiveTabPane } = props;

    const { context, helper } = useTabbedDialogContext<any>();

    const { activedTabId } = context;

    const containerAnimationControls: AnimationControls = useAnimation();
    const tabAnimationControls: AnimationControls = useAnimation();

    React.useEffect(() => {
        // Không rõ vì sao nếu gọi `containerAnimationControls.start` tại hàm click thì lỗi, 
        // nhưng gọi trong useEffect thì lại chạy đc
        if (context.opened) {
            // animation cho sự kiện open
            containerAnimationControls.start("visible")
        }

        return () => { };

    }, [containerAnimationControls, context.opened]);

    // ==================================================================

    const generateTabHeaders = React.useCallback((): _childrenType => {
        return getAllChildrenByType(children, TabItem, (child) => {
            let { props } = child;
            let { id, disabled, label } = props;

            return (
                <TabWrapper value={id} disabled={disabled} isActivedTab={id === activedTabId}>
                    {label}
                </TabWrapper>
            );
        });
    }, [activedTabId, children]);

    const generateTabPanels = React.useCallback((): _childrenType => {
        return getAllChildrenByType(children, TabItem, (child) => {
            let { props } = child;
            let { id } = props;

            return (
                <TabPanelWrapper value={props.id} tabAnimationControls={tabAnimationControls}>
                    {/* {props.children} */}
                    <div>123456</div>
                </TabPanelWrapper>
            );

            // if (destroyInactiveTabPane) {
            //     return activedTabId === id ? (
            //         <TabPanelWrapper value={props.id} tabAnimationControls={tabAnimationControls}>
            //             {props.children}
            //         </TabPanelWrapper>
            //     ) : null;
            // } else {
            //     return (
            //         <TabPanelWrapper value={props.id} tabAnimationControls={tabAnimationControls}>
            //             {props.children}
            //         </TabPanelWrapper>
            //     );
            // }
        })
    }, [activedTabId, children, destroyInactiveTabPane, tabAnimationControls]);

    const handleOnChangeTab = React.useCallback(async (
        event: React.SyntheticEvent<Element, Event>,
        tabId: string | number | boolean
    ) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedId(tabId);

        // Gọi hàm onchange từ props
        await onChange?.(event, tabId, context, helper);

        // kích hoạt sự kiện animation
        await tabAnimationControls.start("animate");

    }, [context, helper, onChange, tabAnimationControls]);

    // ==================================================================

    const generateActivator = React.useCallback((): JSX.Element | null => {
        return getChildrenByType(children, Activator);
    }, [children]);

    const renderExtraHeader = React.useCallback((): JSX.Element | null => {
        return (
            <TabsListWrapper
                slotProps={{
                    root: () => ({
                        className: 'flex',
                    }),
                }}
            >
                {generateTabHeaders()}
            </TabsListWrapper>)
    }, [generateTabHeaders]);

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
    }, [context, handleOnClose, helper, props]);

    const renderFooter = React.useCallback((): JSX.Element[] | null => {
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

    const renderContent = React.useCallback((): _childrenType => {
        return generateTabPanels();
    }, [generateTabPanels]);

    return {
        generateActivator,
        handleOnClickActivator,
        handleOnClose,
        containerAnimationControls,
        renderExtraHeader,
        renderFooter,
        renderContent,
        generateTabHeaders,
        generateTabPanels,
        handleOnChangeTab
    };

};

export default useTabbedDialog;