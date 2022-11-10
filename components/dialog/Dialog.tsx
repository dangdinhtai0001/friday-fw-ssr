// react imports
import React, { Children } from 'react';
// 3rd imports
// local imports
import Activator from "./core/Activator";
import { IDialogPropTypes, ActivatorProps } from "./core/PropTypes";
import { DialogContextProvider } from './core/DialogContext'

// define type/ interface

const Dialog = (props: IDialogPropTypes) => {
    const { children } = props;

    // ------------------------- || render function || -------------------------
    const renderActivatorContainer = () => {
        return Children.map(children, (child) => {
            if (child && child.type === Dialog.Activator) {
                return child;
            }
        });
    };
    return <DialogContextProvider initialState={{ visible: false }}>
        {renderActivatorContainer()}
    </DialogContextProvider>;
}

Dialog.Activator = (props: ActivatorProps) => {
    return <Activator {...props} />
}

export default Dialog;