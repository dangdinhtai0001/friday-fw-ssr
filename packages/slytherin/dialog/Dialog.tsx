// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import Backdrop from './Backdrop';
import { DialogProps } from './Dialog.d';
import DialogActivator from './DialogActivator';
import { useDialogContext } from './DialogContext';

function getActivator(children?: JSX.Element): JSX.Element | null {
    if (!children) return null;

    let _result = null;

    React.Children.forEach(children, (child) => {
        if (child.type === DialogActivator) {
            let { props } = child;
            _result = props.children;

            return _result;
        }
    })

    return _result;
}

function Dialog(props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element {
    const { children } = props;

    const { context, helper } = useDialogContext();

    const handleOnClose = () => {
        helper.commitOpened(false);
    }
    return (
        <>
            {getActivator(children)}
            <ModalUnstyled
                open={context.opened}
                onClose={handleOnClose}
                slots={{ backdrop: Backdrop }}
                ref={ref}
            >
                {children}
            </ModalUnstyled>
        </>
    );
}

export default React.forwardRef(Dialog);