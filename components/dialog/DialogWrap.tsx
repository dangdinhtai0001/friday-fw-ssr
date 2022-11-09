import React from 'react';
import Portal from '@components/portal/Portal';
import type { IDialogPropTypes } from './IDialogPropTypes';

const DialogWrap: React.FC<IDialogPropTypes> = (props: IDialogPropTypes) => {
    const { visible = false, getContainer, forceRender, destroyOnClose = false, afterClose } = props;
    const [animatedVisible, setAnimatedVisible] = React.useState<boolean>(visible);

    // Destroy on close will remove wrapped div
    if (!forceRender && destroyOnClose && !animatedVisible) {
        return null;
    }


    return (
        <Portal
            open={visible || forceRender || animatedVisible}
            autoDestroy={false}
            getContainer={getContainer}
            autoLock={visible || animatedVisible}
        >

        </Portal>
    );
};

export default DialogWrap;