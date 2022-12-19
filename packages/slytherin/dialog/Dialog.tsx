// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import Backdrop from './Backdrop';
import { DialogProps } from './Dialog.d';
import DialogContainer from './DialogContainer';
import { useDialogContext } from './DialogContext';
import { getActivator, getContent } from './DialogUtils';
import useDialog from './useDialog';

function Dialog(props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element {
    const {
        children,
        onActiveAction,
        onClose
    } = props;

    const { context } = useDialogContext();
    const { handleOnClickActivator, handleOnClose } = useDialog(props);

    return (
        <>
            {React.cloneElement(getActivator(children!)!, { onClick: handleOnClickActivator })}
            <ModalUnstyled
                open={context.opened}
                onClose={handleOnClose}
                closeAfterTransition
                disableScrollLock={true}
                slots={{ backdrop: Backdrop }}
                ref={ref}
            >
                <DialogContainer
                    {...props}
                    onActiveAction={onActiveAction}
                    onClose={onClose}
                >
                    {getContent(children!)}
                </DialogContainer>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);