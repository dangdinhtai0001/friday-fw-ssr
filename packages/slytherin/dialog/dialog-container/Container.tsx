// react imports
import * as React from 'react';
// 3rd imports
import {
    AnimatePresence,
    motion,
    useAnimation
} from 'framer-motion';
// local imports
import { Resizable, useResizable } from '@packages/hufflepuff/resizable';
import { DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';
import { containerVariants } from '../constant.d';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function Container(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const { context } = useDialogContext();

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

    React.useEffect(() => {
        controls.start('visible');
        return () => {
            controls.start('exit');
        };

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
                    <div className="flex flex-col w-full h-full ">
                        {/* ------------------------------------ | header | ------------------------------------ */}
                        <Header {...props} animationControls={controls} />
                        {/* ------------------------------------ | content | ------------------------------------ */}
                        <Content {...props} />
                        {/* ------------------------------------ | footer | ------------------------------------ */}
                        <Footer {...props} />
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
