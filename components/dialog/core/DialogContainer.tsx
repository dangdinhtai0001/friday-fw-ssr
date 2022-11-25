// ------- react imports
import React from 'react';
// ------- 3rd imports
import { motion } from 'framer-motion';
import { Resizable } from 're-resizable';
import classNames from 'classnames';
// ------- local imports
import { useDialogContext } from './DialogContext';
import Button from '@components/button';

// ------- type imports
import type { IDialogPropTypes } from './interface';

const dropIn = {
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

const DialogContainer = (props: IDialogPropTypes) => {
    const {
        title, onDialogEvent, children, initWidth = '700px', initHeight = '500px',
        minWidth, minHeight, maxWidth, maxHeight,
        lockScroll
    } = props;

    const dialogContextHook = useDialogContext();
    const { context } = dialogContextHook;
    const { actionDefs } = context;


    const handleOnDialogEvent = (key: string) => {
        onDialogEvent?.({ key: key, hook: dialogContextHook });
    };

    const renderDialogFooter = () => {
        return actionDefs?.map((item, index) => {
            return (
                <Button
                    key={`${item.key}--${index}`}
                    type={item.type}
                    onClick={() => {
                        handleOnDialogEvent(item.key);
                    }}
                >
                    {item.label}
                </Button>
            );
        });
    };

    const dialogContentClasses = classNames(
        `fd--dialog-content w-full h-full px-[0.5rem] py-[0.3rem] `,
        {
            ['overflow-clip']: lockScroll,
            ['overflow-auto']: !lockScroll
        }
    );

    return (
        <motion.div
            className="fd--dialog-content w-full h-full px-[0.5rem] py-[0.3rem] flex justify-center items-center"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="fd--dialog-panel"
        >
            <Resizable
                defaultSize={{
                    width: initWidth,
                    height: initHeight,
                }}
                minWidth={minWidth}
                minHeight={minHeight}
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                className=" fd--dialog-container flex flex-col rounded-t-[0.5rem] rounded-b-[0.5rem] bg-th-background "
                onResize={(event, direction, ref, delta) => { }}
                onResizeStop={(event, direction, ref, delta) => {
                }}
            >
                {/* ------------------ | header | ------------------ */}
                <div className="fd--dialog-header flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                    {title}
                </div>
                {/* ------------------ | content | ------------------ */}
                <div className={dialogContentClasses}>
                    {children}
                </div>
                {/* ------------------ | footer | ------------------ */}
                <div className="fd--dialog-footer h-fit rounded-b-[0.5rem] border-t-[0.1rem] border-th-foreground flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem]">
                    {renderDialogFooter()}
                </div>
            </Resizable>
        </motion.div>
    );
};

export default DialogContainer;
