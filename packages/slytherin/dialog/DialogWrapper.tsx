// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Dialog from './Dialog';
import { DialogProps } from './Dialog.d';
import { DialogContextProvider } from './DialogContext';

function getDialogContextInitial(props: DialogProps) {
    return { opened: false }
}

const DialogWrapper = (props: DialogProps, ref: React.ForwardedRef<any>): JSX.Element => {
    return (
        <DialogContextProvider initialState={getDialogContextInitial(props)}>
            <Dialog {...props} ref={ref} />
        </DialogContextProvider>
    );
}

export default React.forwardRef(DialogWrapper);