// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import Backdrop from './Backdrop';
import DialogContainer from './dialog-container/Container';
import { DialogProps } from './Dialog.d';
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
                slots={{ backdrop: Backdrop }}
                ref={ref}
            >
                <div
                    tabIndex={-1}
                    className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center"
                >
                    <DialogContainer>
                        {getContent(children)}
                    </DialogContainer>
                </div>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);