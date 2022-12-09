// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import Backdrop from './Backdrop';
import { DialogProps } from './Dialog.d';
import DialogContainer from './DialogContainer';
import { useDialogContext } from './DialogContext';
import DialogActivator from './sub-components/DialogActivator';
import DialogContent from './sub-components/DialogContent';

function getActivator(children: JSX.Element | JSX.Element[]): JSX.Element | null {
    return getChildrenByType(children, DialogActivator);
}

function getContent(children: JSX.Element | JSX.Element[]): JSX.Element | null {
    return getChildrenByType(children, DialogContent);
}

function Dialog(props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children } = props;

    const { context, helper } = useDialogContext();

    const handleOnClickActivator = () => {
        console.debug("Click activator ");
        helper.commitOpened(true);
    }

    const handleOnClose = (event: object, reason: string): void => {
        console.debug("Close event with reason: ", reason);
        helper.commitOpened(false);
    }
    return (
        <>
            {React.cloneElement(getActivator(children)!, { onClick: handleOnClickActivator })}
            <ModalUnstyled
                open={context.opened}
                onClose={handleOnClose}
                closeAfterTransition
                disableScrollLock={true}
                aria-labelledby="__fd-dialog-title"
                aria-describedby="__fd-dialog-description"
                slots={{ backdrop: Backdrop }}
                ref={ref}
            >
                <DialogContainer>
                    {getContent(children)}
                </DialogContainer>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);