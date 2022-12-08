// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Dialog from './Dialog';
import { DialogProps } from './Dialog.d';
import DialogActivator from './DialogActivator';
import { DialogContextProvider } from './DialogContext';

function getDialogContextInitial(props: DialogProps) {
    return { opened: false }
}

function DialogWrapper(props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element {
    return (
        <DialogContextProvider initialState={getDialogContextInitial(props)}>
            <Dialog {...props} ref={ref} />
        </DialogContextProvider>
    );
}

DialogWrapper.Activator = DialogActivator;

export default React.forwardRef(DialogWrapper);