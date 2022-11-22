// ------- react imports
import React from 'react';
// ------- 3rd imports
import { AnimatePresence } from 'framer-motion';
// ------- local imports
import Portal from '@components/portal/Portal';
import { useDialogContext } from './DialogContext';
// ------- type imports
import type { IDialogPropTypes } from './interface';
import DialogContainer from './DialogContainer';

const DialogPortal: React.FC<IDialogPropTypes> = (props: IDialogPropTypes) => {
    const dialogContextHook = useDialogContext();
    const { context } = dialogContextHook;
    const { visible } = context;

    const {
        getContainer,
        forceRender,
        destroyOnClose = false,
    } = props;

    // Destroy on close will remove wrapped div
    if (!forceRender && destroyOnClose) {
        return null;
    }


    return (
        <AnimatePresence mode="sync">
            {/* 
        - Phải thêm điêu kiện như này thì framer motion mới chạy animate exit 
        - Nếu không cần animate thì bỏ phần này, chỉ cần dùng props open của portal alf đã có thể ok rồi
       */}
            {visible && (
                <Portal
                    open={visible || forceRender}
                    autoDestroy={false}
                    getContainer={getContainer}
                    autoLock={visible}
                >
                    <div className="fd--dialog-root">
                        {/* ----------------------------------- | mask | ----------------------------------- */}
                        <div className="fd--dialog-mask absolute top-0 left-0 bg-black opacity-50 h-screen w-screen "></div>
                        {/* ----------------------------------- | container | ----------------------------------- */}

                        <div
                            tabIndex={-1}
                            className="fd--dialog-screen absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
                        >
                            <DialogContainer {...props} />
                        </div>
                        {/* ----------------------------------- | container | ----------------------------------- */}
                    </div>
                </Portal>
            )}
        </AnimatePresence>
    );
};

export default DialogPortal;
