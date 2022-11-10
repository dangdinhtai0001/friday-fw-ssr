// react imports
import React, { Children } from 'react';
// 3rd imports
// local imports
import Activator from "./core/Activator";
import { IDialogPropTypes, ActivatorProps } from "./core/PropTypes";
import { DialogContextProvider } from './core/DialogContext';
import DialogContainer from './core/dialog-container/DialogContainer';

// define type/ interface

const Dialog = (props: IDialogPropTypes) => {
    const { children } = props;

    // ------------------------- || render function || -------------------------
    const renderActivatorContainer = () => {
        if (Children.count(children) === 0) {
            return <></>;
        }

        let _activator = <></>;

        Children.forEach(children, (child) => {
            if (child && child.type === Dialog.Activator) {
                _activator = child;
            }
        });

        return _activator;
    };

    const renderDialogContainer = () => {
        return <DialogContainer {...props}>
            <div className='h-[500px] w-[700px]'>123456</div>
        </DialogContainer>
    }
    return <DialogContextProvider initialState={{ visible: false }}>
        {renderDialogContainer()}
        {renderActivatorContainer()}
    </DialogContextProvider>;
}

Dialog.Activator = (props: ActivatorProps) => {
    return <Activator {...props} />
}

export default Dialog;