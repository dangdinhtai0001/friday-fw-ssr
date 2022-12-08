// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import Backdrop from './Backdrop';
import { DialogProps } from './Dialog.d';
import DialogActivator from './DialogActivator';
import DialogContent from './DialogContent';
import { useDialogContext } from './DialogContext';

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
        console.log("click activator");
    }

    const handleOnClose = () => {
        helper.commitOpened(false);
    }
    return (
        <>
            {React.cloneElement(getActivator(children)!, { onClick: handleOnClickActivator })}
            <ModalUnstyled
                open={context.opened}
                // open={true}
                onClose={handleOnClose}
                slots={{ backdrop: Backdrop }}
                ref={ref}
            >
                <div>
                    {getContent(children)}
                </div>
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);