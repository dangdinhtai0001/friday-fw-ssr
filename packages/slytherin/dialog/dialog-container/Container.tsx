// react imports
import * as React from 'react';
// 3rd imports
import { motion } from 'framer-motion';
// local imports
import { DialogContainerProps } from '../Dialog.d';
import { useDialogContext } from '../DialogContext';

const variants = {
    hidden: {
        y: '-100vh',
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
        y: '100vh',
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

    return (
        <motion.div
            className="fd--dialog-content w-full h-full px-[0.5rem] py-[0.3rem] flex justify-center items-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="fd--dialog-panel"
        >
            <div className=' flex flex-col rounded-t-[0.5rem] rounded-b-[0.5rem] bg-blue-200'>

                {/* ------------------ | header | ------------------ */}
                <div className="flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                    {context.title}
                </div>
                {/* ------------------ | content | ------------------ */}
                <div className='w-full h-full px-[0.5rem] py-[0.3rem]'>
                    {children}
                </div>
                {/* ------------------ | footer | ------------------ */}
                <div className="h-fit rounded-b-[0.5rem] border-t-[0.1rem] flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem]">
                    Đây là footer
                </div>
            </div>
        </motion.div>
    );
}

export default React.forwardRef(Container);