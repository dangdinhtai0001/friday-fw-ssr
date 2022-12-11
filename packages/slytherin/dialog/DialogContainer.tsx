// react imports
import * as React from 'react';
// 3rd imports
import classNames from 'classnames';
import { AnimatePresence, motion, PanInfo, useAnimation, useMotionValue } from 'framer-motion';
// local imports
import { useValidSize } from '@packages/hufflepuff/hooks';
import { resizeableDirection } from '@packages/ravenclaw/global-interface';
import { DialogContainerProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';

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

function Container(props: DialogContainerProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children, minHeight = 200, maxHeight = 700, minWidth = 600, maxWidth = 1000 } = props;

    const { context } = useDialogContext();

    const controls = useAnimation();
    const mHeight = useMotionValue(300);
    const mWidth = useMotionValue(600);

    const [isResizing, setIsResizing] = React.useState(false);
    const { isResizableVertical, isResizableHorizontal, isValidWidth, isValidHeight, setIsResizableVertical } = useValidSize({ width: mWidth.get(), height: mHeight.get(), minHeight, maxHeight, minWidth, maxWidth });
    const constraintsRef = React.useRef(null);
    const containerRef = React.useRef(null);


    const handleOnResize = React.useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: resizeableDirection) => {
        let newHeight = mHeight.get();
        let newWidth = mWidth.get();

        if (direction === 'bottom') {
            newHeight = mHeight.get() + info.delta.y;

        }
        if (direction === 'top') {
            newHeight = mHeight.get() - info.delta.y;

        }

        if (direction === 'left') {
            newWidth = mWidth.get() - info.delta.x;
        }
        if (direction === 'right') {
            newWidth = mWidth.get() + info.delta.x;
        }

        if (isValidHeight(newHeight)) {
            mHeight.set(newHeight);
        } else {
            setIsResizableVertical(false);

        }
        mWidth.set(newWidth);


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderResizeableAnchor = (direction: resizeableDirection) => {
        let drag: 'x' | "y" | boolean = "x";

        if (direction === 'top' || direction === 'bottom') {
            console.log("re render drag", isResizableVertical);

            drag = isResizableVertical ? 'y' : false;
        }

        if (direction === 'left' || direction === 'right') {
            drag = isResizableHorizontal ? 'x' : false;
        }


        const _classname = classNames(
            `bg-red-200`,
            {
                [`w-full h-[10px]  cursor-ns-resize`]: direction === 'top' || direction === 'bottom',
                [`h-full w-[10px] cursor-ew-resize`]: direction === 'left' || direction === 'right',
                [`__fd-resize-top`]: direction === 'top',
                [`__fd-resize-bottom`]: direction === 'bottom',
                [`__fd-resize-left`]: direction === 'left',
                [`__fd-resize-right`]: direction === 'right',
            }
        )
        return (
            <motion.div
                className={_classname}
                drag={drag}
                dragConstraints={containerRef}
                dragElastic={0}
                dragMomentum={false}
                // transition={{ type: 'spring', velocity: 0 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                onDragEnd={() => {
                    setIsResizing(false);
                }}
                onDragStart={() => {
                    setIsResizing(true);
                }}
                onDrag={(e, info) => { handleOnResize(e, info, direction) }}
            />
        )
    }

    React.useEffect(() => {
        controls.start("visible");
        return () => {
            controls.start("exit");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.opened]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex flex-col justify-center items-center overflow-hidden"
                variants={variants}
                initial="hidden"
                animate={controls}
                key="fd--dialog-panel"
                ref={constraintsRef}
            >
                <motion.div
                    drag={!isResizing}
                    dragConstraints={constraintsRef}
                    className='rounded-t-[0.5rem] rounded-b-[0.5rem] relative '

                >
                    <div className='flex flex-col w-full h-full' >
                        {/* ------------------------------------ | header | ------------------------------------ */}
                        <div id="__fd-dialog-title" className="flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                            {context.title}
                        </div>
                        {/* ------------------------------------ | content | ------------------------------------ */}
                        <div id="__fd-dialog-description" className='w-full h-full px-[0.5rem] py-[0.3rem] bg-th-background'>
                            {children}
                        </div>
                        {/* ------------------------------------ | footer | ------------------------------------ */}
                        <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem] bg-th-background">
                            Đây là footer
                        </div>
                    </div>
                    <div>
                        <motion.div className="absolute select-none w-[100%] h-[10px] top-[-5px] left-[0px] cursor-row-resize bg-red-200"
                            drag="y"
                            dragConstraints={constraintsRef}
                            dragElastic={0}
                            dragMomentum={false}
                        />
                        <motion.div className="absolute select-none w-[10px] h-[100%] top-[0px] right-[-5px] cursor-col-resize bg-orange-500" />
                        <motion.div className="absolute select-none w-[100%] h-[10px] bottom-[-5px] left-[0px] cursor-row-resize bg-red-200" />
                        <motion.div className="absolute select-none w-[10px] h-[100%] top-[0px]  left-[-5px] cursor-col-resize bg-red-200" />
                        <motion.div className="absolute select-none w-[20px] h-[20px] top-[-10px] right-[-10px] cursor-ne-resize bg-red-200" />
                        <motion.div className="absolute select-none w-[20px] h-[20px] bottom-[-10px] right-[-10px] cursor-se-resize bg-red-200" />
                        <motion.div className="absolute select-none w-[20px] h-[20px] bottom-[-10px] left-[-10px] cursor-sw-resize bg-red-200" />
                        <motion.div className="absolute select-none w-[20px] h-[20px] top-[-10px] left-[-10px] cursor-nw-resize bg-red-200" />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default React.forwardRef(Container);