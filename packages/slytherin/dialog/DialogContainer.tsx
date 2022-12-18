// react imports
import * as React from 'react';
// 3rd imports
import {
    AnimatePresence,
    motion
} from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
// local imports
import { Resizable, useResizable } from '@packages/hufflepuff/resizable';
import { Button } from '@packages/slytherin/button';
import { DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';
import { containerVariants, getExtraHeader, renderDialogActions } from './DialogUtils';
import useDialog from './useDialog';

function Container(
    props: DialogProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { children } = props;

    const { context } = useDialogContext();

    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = context;

    const { containerAnimationControls, handleOnClose, handleOnActiveAction } = useDialog(props);


    const constraintsRef = React.useRef(null);

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
                // animate={controls}
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
                    <div className="flex flex-col w-full h-full ">
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
                            {getExtraHeader(children!)}
                        </div>
                        {/* ------------------------------------ | content | ------------------------------------ */}
                        <div className="w-full h-full px-[0.5rem] py-[0.3rem] overflow-auto bg-th-background "        >
                            {children}
                        </div>
                        {/* ------------------------------------ | footer | ------------------------------------ */}
                        <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
                            {renderDialogActions(
                                context.actions, handleOnActiveAction)
                            }
                        </div>
                    </div>
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
