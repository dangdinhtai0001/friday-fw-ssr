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
        minHeight = 200,
        maxHeight = 800,
        minWidth = 600,
        maxWidth = 1000,
        initialHeight = 300,
        initialWidth = 600,
    } = props;

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
                <DialogContainer
                    initialHeight={initialHeight}
                    initialWidth={initialWidth}
                    minWidth={minWidth}
                    maxWidth={maxWidth}
                    minHeight={minHeight}
                    maxHeight={maxHeight}
                    extraHeader={getExtraHeader(children)}
                >
                    {getContent(children)}
                </DialogContainer>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);