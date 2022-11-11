// react imports
import React, { Children } from 'react';
// 3rd imports
import { motion, AnimatePresence } from "framer-motion";
// local imports
import Activator from "./core/Activator";
import { IDialogPropTypes, ActivatorProps } from "./core/PropTypes";
import { DialogContextProvider } from './core/DialogContext';
import DialogContainer from './core/DialogContainer';

// define type/ interface
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Dialog = (props: IDialogPropTypes) => {
    const { actionDefs, children } = props;

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
        if (Children.count(children) === 0) {
            return <></>;
        }

        let _container = <></>;

        Children.forEach(children, (child) => {
            if (child && child.type === Dialog.Container) {
                _container = child;
            }
        });


        return <DialogContainer {...props}>
            {_container}
        </DialogContainer>
    };

    return (
        <DialogContextProvider initialState={{ visible: false, actionDefs: actionDefs }}>
            {renderDialogContainer()}
            {renderActivatorContainer()}
        </DialogContextProvider>
    );
}

Dialog.Activator = (props: ActivatorProps) => {
    return <Activator {...props} />
}

Dialog.Container = ({ children }) => {
    return children;
}

export default Dialog;