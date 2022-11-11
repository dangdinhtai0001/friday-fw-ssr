// ------- react imports
import React from 'react';
// ------- 3rd imports
// ------- local imports
import Portal from '@components/portal/Portal';
import { useDialogContext } from './DialogContext';
// ------- type imports
import type { IDialogPropTypes } from './PropTypes';

const DialogContainer: React.FC<IDialogPropTypes> = (props: IDialogPropTypes) => {
    const { context } = useDialogContext();
    const { visible } = context;

    const { getContainer, forceRender, destroyOnClose = false, afterClose, title, children } = props;


    // Destroy on close will remove wrapped div
    if (!forceRender && destroyOnClose) {
        return null;
    }


    return (
        <Portal
            open={visible || forceRender}
            autoDestroy={false}
            getContainer={getContainer}
            autoLock={visible}
        >
            <div className='fd--dialog-root transition-all ease-in-out'>
                {/* ----------------------------------- | mask | ----------------------------------- */}
                <div className='fd--dialog-mask absolute top-0 left-0 bg-black opacity-50 h-screen w-screen '></div>
                {/* ----------------------------------- | container | ----------------------------------- */}
                <div tabIndex={-1} className='fd--dialog-container absolute top-0 left-0 h-screen w-screen flex items-center justify-center'>
                    <div className='fd--dialog-panel h-fit w-fit bg-th-background rounded-[0.5rem] flex flex-col '>
                        {/* ------------------ | header | ------------------ */}
                        <div className='fd--dialog-header flex items-center justify-center text-th-text-primary font-[600] text-[1.5rem] h-[2.1rem] w-full bg-th-primary rounded-t-[0.5rem]'>{title}</div>
                        {/* ------------------ | content | ------------------ */}
                        <div className='fd--dialog-content'>{children}</div>
                        {/* ------------------ | footer | ------------------ */}
                        <div className='fd--dialog-footer h-[2.1rem] rounded-b-[0.5rem] border-t-[0.1rem] border-th-foreground'></div>
                    </div>
                </div>
                {/* ----------------------------------- | container | ----------------------------------- */}
            </div>

        </Portal>
    );
};

export default DialogContainer;