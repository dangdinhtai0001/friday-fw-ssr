// react imports
import * as React from 'react';
// 3rd imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
import {
    AnimatePresence,
    motion,
    useAnimation
} from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
// local imports
import useDialog from '@packages/hufflepuff/dialog-family/useDialog';
import { Resizable, useResizable } from '@packages/hufflepuff/resizable';
import { getAllChildrenByType } from '@packages/ravenclaw';
import { Button } from '@packages/slytherin/button';
import TabHeaders from '@packages/slytherin/tabs/TabHeaders';
import TabItem from '@packages/slytherin/tabs/TabItem';
import TabPanelWrapper from '@packages/slytherin/tabs/TabPanelWrapper';
import { TabsContextProvider } from '@packages/slytherin/tabs/TabsContext';
import { containerVariants } from '../constant.d';
import { ActionDef, DialogContainerProps } from './TabbedDialog.d';
import { useTabbedDialogContext } from './TabbedDialogContext';

function getTabItems(children: JSX.Element | JSX.Element[]): JSX.Element | JSX.Element[] | null {
    return getAllChildrenByType(children, TabItem, (child) => { return child });
}

function renderDialogActions(actions?: ActionDef[], handleOnActiveAction?: (event: React.MouseEvent<unknown, MouseEvent>, key: string) => void): JSX.Element[] | null {
    if (!actions || actions.length <= 0) {
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
                        onClick={(e) => { handleOnActiveAction?.(e, key) }}
                        disabled={disabled}
                    >
                        {label}
                    </Button>}
                </div>
            );
        }

    });
}

function Container(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { children, onActiveAction } = props;
    const { context, helper } = useTabbedDialogContext();

    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = context;

    const controls = useAnimation();


    const constraintsRef = React.useRef(null);

    const { handleOnResize, mHeight, mWidth } = useResizable({
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    });

    const { handleOnClose } = useDialog({ ...props, animationControls: controls }, context, helper);

    const handleOnChangeTab = (event: React.SyntheticEvent<Element, Event>, tabId: string | number | boolean) => {
        // update lại tab id mỗi khi thay đổi
        helper.commitActivedTabId(tabId);

        // Gọi hàm onchange từ props
        props.onChangeTab?.(event, tabId, context, helper);

        console.log("on change tab");

    }

    const handleOnActiveAction = async (event: React.MouseEvent<unknown, MouseEvent>, key: string) => {
        await onActiveAction?.(event, key, context, helper);
    }


    React.useEffect(() => {
        controls.start('visible');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.opened]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex flex-col justify-center items-center overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                key="__fd--dialog-panel"
                ref={constraintsRef}
            >
                <motion.div
                    drag={true}
                    dragConstraints={constraintsRef}
                    className="rounded-t-[0.5rem] rounded-b-[0.5rem] relative "
                    style={{
                        height: mHeight,
                        width: mWidth,
                    }}
                >
                    <TabsContextProvider initialState={{ activedId: context.activeTabId }}>
                        <TabsUnstyled
                            onChange={(
                                event: React.SyntheticEvent<Element, Event>,
                                value: string | number | boolean
                            ) => {
                                handleOnChangeTab(event, value);
                            }}
                            slotProps={{
                                root: () => ({
                                    className: 'flex flex-col w-full h-full '
                                })
                            }}
                        >
                            {/* ------------------------------------ | header | ------------------------------------ */}
                            <div className="flex items-center justify-between text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem] "  >
                                <div></div>
                                {context.title}
                                <Button
                                    useBorder={false}
                                    theme='danger'
                                    onClick={(event) => { handleOnClose(event, "headerClick") }}
                                    icon={<AiFillCloseCircle className='scale-[1.4] h-full w-full fill-th-danger bg-th-background rounded-full' />}
                                />
                            </div>
                            {/* ------------------------------------ | extra header | ------------------------------------ */}
                            <div className='w-full h-fit bg-th-background'>
                                <TabHeaders>{getTabItems(children!)}</TabHeaders>
                            </div>
                            {/* ------------------------------------ | content | ------------------------------------ */}
                            <div className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background "        >
                                <TabPanelWrapper>{getTabItems(children!)}</TabPanelWrapper>
                            </div>
                            {/* ------------------------------------ | footer | ------------------------------------ */}
                            <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
                                {renderDialogActions(
                                    context.actions, handleOnActiveAction)
                                }
                            </div>
                        </TabsUnstyled>
                    </TabsContextProvider>
                    {/* -------------------------------------------- | resizable container | -------------------------------------------- */}
                    <Resizable
                        onResizeStart={() => { }}
                        onResizeEnd={() => { }}
                        onResize={handleOnResize}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default React.forwardRef(Container);
