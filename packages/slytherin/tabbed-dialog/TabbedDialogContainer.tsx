// react imports
import * as React from 'react';
// 3rd imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
import {
    AnimatePresence,
    motion
} from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
// local imports
import { Resizable, useResizable } from '@packages/hufflepuff/resizable';
import { Button } from '@packages/slytherin/button';
import TabsList from '@packages/slytherin/tabs/TabsList';
import { getTabHeaders, getTabPanels } from '@packages/slytherin/tabs/TabsUtils';
import { TabbedDialogProps } from './TabbedDialog.d';
import { useTabbedDialogContext } from './TabbedDialogContext';
import { containerVariants, renderDialogActions } from './TabbedDialogUtils';
import useTabbedDialog from './useTabbedDialog';

function Container(
    props: TabbedDialogProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { children } = props;

    const { context } = useTabbedDialogContext();
    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = context;
    const constraintsRef = React.useRef(null);

    const { containerAnimationControls, handleOnClose, handleOnActiveAction, handleOnChangeTab, tabAnimationControls } = useTabbedDialog(props);
    const { handleOnResize, mHeight, mWidth } = useResizable({
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    });


    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex flex-col justify-center items-center overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={containerAnimationControls}
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
                    <TabsUnstyled
                        value={context.activedTabId}
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
                                // theme='danger'
                                onClick={(event) => { handleOnClose(event, "headerClick") }}
                                icon={<AiFillCloseCircle className='scale-[1.4] h-full w-full fill-th-danger bg-th-background rounded-full' />}
                            />
                        </div>
                        {/* ------------------------------------ | extra header | ------------------------------------ */}
                        <div className='w-full h-fit bg-th-background'>
                            <TabsList
                                slotProps={{
                                    root: () => ({
                                        className: 'flex',
                                    }),
                                }}
                            >
                                {getTabHeaders(children, context)}
                            </TabsList>
                        </div>
                        {/* ------------------------------------ | content | ------------------------------------ */}
                        <div className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background "        >
                            {getTabPanels(props, context, { tabAnimationControls })}
                        </div>
                        {/* ------------------------------------ | footer | ------------------------------------ */}
                        <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
                            {renderDialogActions(
                                context.actions, handleOnActiveAction)
                            }
                        </div>
                    </TabsUnstyled>
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
