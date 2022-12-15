// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import useDialog from '@packages/hufflepuff/dialog-family/useDialog';
import { getChildrenByType } from '@packages/ravenclaw';
import Backdrop from './Backdrop';
import DialogContainer from './dialog-container/Container';
import { DialogProps } from './Dialog.d';
import { useDialogContext } from './DialogContext';
import DialogActivator from './sub-components/DialogActivator';
import DialogContent from './sub-components/DialogContent';
import DialogExtraHeader from './sub-components/DialogExtraHeader';

function getActivator(children: JSX.Element | JSX.Element[]): JSX.Element | null {
    return getChildrenByType(children, DialogActivator);
}

function getContent(children: JSX.Element | JSX.Element[]): JSX.Element | null {
    return getChildrenByType(children, DialogContent);
}

function getExtraHeader(children: JSX.Element | JSX.Element[]): JSX.Element | null {
    return getChildrenByType(children, DialogExtraHeader);
}

function Dialog(props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element {
    const {
        children,
        onActiveAction
    } = props;

    const { context, helper } = useDialogContext();
    const { handleOnClickActivator, handleOnClose } = useDialog(props, context, helper);

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
                <DialogContainer
                    extraHeader={getExtraHeader(children)}
                    onActiveAction={onActiveAction}
                >
                    {getContent(children)}
                </DialogContainer>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);