// react imports
import * as React from 'react';
// 3rd imports
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
// local imports
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { Resizable, useResizable } from '@packages/hufflepuff';
import Button from '@packages/slytherin/button/Button';
import { DialogContainerProps } from './TabbedDialog.d';
import useTabbedDialog from './useTabbedDialog';

const containerVariants = {
    hidden: {
        y: '-100%',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100%',
        opacity: 1,
        transition: {
            duration: 0.25,
            type: 'spring',
        },
    },
};

function TabbedDialogContainer(
    props: DialogContainerProps,
    // eslint-disable-next-line no-unused-vars
    ref: React.ForwardedRef<any>
): JSX.Element {
    const {
        // ----- container::resize
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth,
        // ----- header
        title,
    } = props;

    const constraintsRef = React.useRef(null);

    const { handleOnResize, mHeight, mWidth } = useResizable({
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth,
    });

    const {
        handleOnClose,
        containerAnimationControls,
        renderFooter,
        renderExtraHeader,
        renderContent,
        handleOnChangeTab
    } = useTabbedDialog(props);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex flex-col justify-center items-center overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate={containerAnimationControls}
                key="__fd--dialog-panel-"
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
                        onChange={async (
                            event: React.SyntheticEvent<Element, Event>,
                            value: string | number | boolean
                        ) => {
                            await handleOnChangeTab(event, value);
                        }}
                        slotProps={{
                            root: () => ({
                                className: 'w-full h-full'
                            })
                        }}
                    >
                        <div className="flex flex-col w-full h-full ">
                            {/* ------------------------------------ | header | ------------------------------------ */}
                            <div className="flex items-center justify-between text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem] ">
                                <div></div>
                                {title}
                                <Button
                                    useBorder={false}
                                    onClick={async (event) => {
                                        await handleOnClose(event, 'headerClick');
                                    }}
                                    icon={
                                        <AiFillCloseCircle className="scale-[1.2] h-full w-full fill-th-danger bg-th-background rounded-full" />
                                    }
                                />
                            </div>
                            {/* ------------------------------------ | extra header | ------------------------------------ */}
                            <div className="w-full h-fit bg-th-background">
                                {renderExtraHeader()}
                            </div>
                            {/* ------------------------------------ | content | ------------------------------------ */}
                            <div className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background ">
                                {renderContent()}
                            </div>
                            {/* ------------------------------------ | footer | ------------------------------------ */}
                            <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
                                {renderFooter()}
                            </div>
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

export default React.forwardRef(TabbedDialogContainer);
