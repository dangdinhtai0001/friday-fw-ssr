// react imports
import * as React from 'react';
// 3rd imports
import { AnimatePresence, motion, PanInfo, useAnimation, useMotionValue } from 'framer-motion';
// local imports
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
    const { children } = props;

    const { context } = useDialogContext();

    const controls = useAnimation();
    const mHeight = useMotionValue(200);

    const [isResizing, setIsResizing] = React.useState(false);
    const constraintsRef = React.useRef(null);


    const handleOnResize = React.useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, direction: 'top' | 'bottom' | 'left' | 'right') => {
        let newHeight = mHeight.get() + info.delta.y;
        if (newHeight > 200 && newHeight < 400) {
            mHeight.set(mHeight.get() + info.delta.y);
        }
    }, []);

    React.useEffect(() => {
        controls.start("visible");
        return () => {
            controls.start("exit");
        }

    }, [context.opened])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="__fd--dialog-panel absolute top-0 left-0 w-full h-full px-[0.5rem] py-[0.3rem] flex justify-center items-center overflow-hidden"
                variants={variants}
                initial="hidden"
                animate={controls}
                key="fd--dialog-panel"
                ref={constraintsRef}
            >
                <motion.div
                    drag={!isResizing}
                    dragConstraints={constraintsRef}
                    className=' flex flex-col rounded-t-[0.5rem] rounded-b-[0.5rem] bg-th-background'
                    style={{
                        height: mHeight,
                        width: 200,
                        cursor: isResizing ? "row-resize" : "",
                    }}
                >
                    {/* ========================================================= resize top =========================================================*/}
                    <motion.div
                        style={{
                            cursor: "row-resize",
                            textAlign: "center",
                            userSelect: "none",
                            width: '100%',
                            height: '5px',
                        }}
                        className='bg-transparent'
                        drag="y"
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        dragElastic={0}
                        dragMomentum={false}
                        onDrag={(e, info) => { handleOnResize(e, info, 'top') }}
                        onDragEnd={() => {
                            setIsResizing(false);
                        }}
                        onDragStart={() => {
                            setIsResizing(true);
                        }}
                    ></motion.div>
                    {/* ========================================================= resize top =========================================================*/}

                    {/* ------------------ | header | ------------------ */}
                    <div id="__fd-dialog-title" className="flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                        {context.title}
                    </div>
                    {/* ------------------ | content | ------------------ */}
                    <div id="__fd-dialog-description" className='w-full h-full px-[0.5rem] py-[0.3rem]'>
                        {children}
                    </div>
                    {/* ------------------ | footer | ------------------ */}
                    <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem]">
                        Đây là footer
                    </div>

                    {/* ========================================================= resize bot =========================================================*/}
                    <motion.div
                        style={{
                            cursor: "row-resize",
                            textAlign: "center",
                            userSelect: "none",
                            width: '100%',
                            height: '1px',
                        }}
                        drag="y"
                        dragConstraints={{ top: -5, left: 0, right: 0, bottom: 0 }}
                        dragElastic={0}
                        dragMomentum={false}
                        onDrag={(e, info) => { handleOnResize(e, info, 'bottom') }}
                        onDragEnd={() => {
                            setIsResizing(false);
                        }}
                        onDragStart={() => {
                            setIsResizing(true);
                        }}
                    />
                    {/* ========================================================= resize bot =========================================================*/}

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default React.forwardRef(Container);