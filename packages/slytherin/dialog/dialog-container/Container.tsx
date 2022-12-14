// react imports
import * as React from 'react';
// 3rd imports
import {
    AnimatePresence,
    motion,
    PanInfo,
    useAnimation,
    useMotionValue,
} from 'framer-motion';
import { inRange } from 'lodash';
// local imports
import { Resizable } from '@packages/hufflepuff/resizable';
import { ResizeableDirection } from '@packages/ravenclaw/global-interface';
import { DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const variants = {
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
        opacity: 0,
        transition: {
            duration: 0.25,
            type: 'spring',
        },
    },
};


function Container(
    props: DialogContainerProps,
    ref: React.ForwardedRef<any>
): JSX.Element {
    const {
        minHeight,
        maxHeight,
        minWidth,
        maxWidth,
        initialHeight,
        initialWidth
    } = props;

    const { context } = useDialogContext();

    const controls = useAnimation();
    const mHeight = useMotionValue(initialHeight);
    const mWidth = useMotionValue(initialWidth);

    const [isResizing, setIsResizing] = React.useState(false);
    const constraintsRef = React.useRef(null);

    const handleOnResize = React.useCallback(
        (
            event: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo,
            direction: ResizeableDirection
        ) => {
            let newHeight = mHeight.get();
            let newWidth = mWidth.get();

            switch (direction) {
                case 'top':
                    newHeight = mHeight.get() - info.delta.y;
                    break;
                case 'bottom':
                    newHeight = mHeight.get() + info.delta.y;
                    break;
                case 'left':
                    newWidth = mWidth.get() - info.delta.x;
                    break;
                case 'right':
                    newWidth = mWidth.get() + info.delta.x;
                    break;
                case 'top-left':
                    newHeight = mHeight.get() - info.delta.y;
                    newWidth = mWidth.get() - info.delta.x;
                    break;
                case 'top-right':
                    newHeight = mHeight.get() - info.delta.y;
                    newWidth = mWidth.get() + info.delta.x;
                    break;
                case 'bottom-left':
                    newHeight = mHeight.get() + info.delta.y;
                    newWidth = mWidth.get() - info.delta.x;
                    break;
                case 'bottom-right':
                    newHeight = mHeight.get() + info.delta.y;
                    newWidth = mWidth.get() + info.delta.x;
                    break;
                default:
                    break;
            }

            if (inRange(newHeight, minHeight, maxHeight)) {
                mHeight.set(newHeight);
            }
            if (inRange(newWidth, minWidth, maxWidth)) {
                mWidth.set(newWidth);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [mHeight, mWidth, maxHeight, maxWidth, minHeight, minWidth]
    );


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
                variants={variants}
                initial="hidden"
                animate={controls}
                key="__fd--dialog-panel"
                ref={constraintsRef}
            >
                <motion.div
                    drag={!isResizing}
                    dragConstraints={constraintsRef}
                    className="rounded-t-[0.5rem] rounded-b-[0.5rem] relative "
                    style={{
                        height: mHeight,
                        width: mWidth,
                    }}
                >
                    <div className="flex flex-col w-full h-full ">
                        {/* ------------------------------------ | header | ------------------------------------ */}
                        <Header {...props} />
                        {/* ------------------------------------ | content | ------------------------------------ */}
                        <Content {...props} />
                        {/* ------------------------------------ | footer | ------------------------------------ */}
                        <Footer {...props} />
                    </div>
                    {/* -------------------------------------------- | resizable container | -------------------------------------------- */}
                    <Resizable
                        onResizeStart={() => { setIsResizing(true); }}
                        onResizeEnd={() => { setIsResizing(true); }}
                        onResize={handleOnResize}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default React.forwardRef(Container);
