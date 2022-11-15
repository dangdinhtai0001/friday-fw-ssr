// ------- react imports
import React from 'react';
// ------- 3rd imports
import { motion } from 'framer-motion';
import { Resizable } from 'react-resizable';
// ------- local imports
import { useDialogContext } from './DialogContext';
import Button from '@components/button';
import { getDimensionByRef } from '@components/_util/dimension'
// ------- type imports
import type { IDialogPropTypes } from './PropTypes';

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
        }
    },
};

const DialogContainer = (props: IDialogPropTypes) => {
    const {
        title,
        onDialogEvent,
        children,
        initWidth = '700px',
        initHeight = '500px'
    } = props;

    const dialogContextHook = useDialogContext();
    const { context } = dialogContextHook;
    const { actionDefs } = context;

    const dialogContainerRef = React.useRef<HTMLDivElement | null>(null);

    const [currentHeight, setCurrentHeight] = React.useState<string>(initHeight);
    const [currentWidth, setCurrentWidth] = React.useState<string>(initWidth);

    const handleOnDialogEvent = (key: string) => {
        onDialogEvent?.({ key: key, hook: dialogContextHook });
    };

    const handleOnResize = (event, { size }) => {
        console.log(size);
    }

    React.useLayoutEffect(() => {
        console.log('use effect ', getDimensionByRef(dialogContainerRef));
        let size = getDimensionByRef(dialogContainerRef);
        setCurrentHeight(`${size?.height ? size.height : initHeight}px`);
        setCurrentWidth(`${size?.width ? size?.width : initWidth}px`);

    }, [initWidth, initHeight]);

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

    return (
        <Resizable height={currentHeight} width={currentWidth} onResize={handleOnResize}>
            <div className='fd--dialog-container border-3' style={{ width: currentWidth, height: currentHeight }} ref={dialogContainerRef}>
                <motion.div
                    className="fd--dialog-panel h-fit w-fit bg-th-background rounded-[0.5rem] flex flex-col "
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    key="fd--dialog-panel"
                >
                    {/* ------------------ | header | ------------------ */}
                    <div className="fd--dialog-header flex items-center justify-center text-th-text-primary font-[600] text-[1.3rem] h-[2.1rem] w-full py-[1rem] bg-th-primary rounded-t-[0.5rem]">
                        {title}
                    </div>
                    {/* ------------------ | content | ------------------ */}
                    <div className="fd--dialog-content overflow-auto w-full h-full px-[0.5rem] py-[0.3rem]">{children}</div>
                    {/* ------------------ | footer | ------------------ */}
                    <div className="fd--dialog-footer h-fit rounded-b-[0.5rem] border-t-[0.1rem] border-th-foreground flex justify-end gap-[0.5rem] px-[0.5rem] py-[0.3rem]">
                        {renderDialogFooter()}
                    </div>
                </motion.div>
            </div>
        </Resizable>
    )

}

export default DialogContainer;