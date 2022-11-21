// react imports
import React, { Children } from 'react';
// 3rd imports
// local imports
import Activator from './core/Activator';
import { IDialogPropTypes, ActivatorProps } from './core/PropTypes';
import { DialogContextProvider } from './core/DialogContext';
import DialogContainer from './core/DialogPortal';

// define type/ interface

const Dialog = (props: IDialogPropTypes) => {
  const { actionDefs, children } = props;


  // ------------------------- || render function || -------------------------
  const renderActivatorContainer = () => {
    if (Children.count(children) === 0) {
      return <></>;
    }

    let _activator = <></>;

    Children.forEach(children, child => {
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

    Children.forEach(children, child => {
      if (child && child.type === Dialog.Container) {
        _container = child;
      }
    });

    return <DialogContainer {...props}>{_container}</DialogContainer>;
  };

  return (
    <DialogContextProvider initialState={{ visible: false, actionDefs: actionDefs }}>
      {renderDialogContainer()}
      {renderActivatorContainer()}
    </DialogContextProvider>
  );
};

// eslint-disable-next-line react/display-name
Dialog.Activator = (props: ActivatorProps) => {
  return <Activator {...props} />;
};

Dialog.Container = ({ children }) => {
  return children;
};

if (process.env.NODE_ENV !== 'production') {
  Dialog.displayName = 'Dialog';
}

export default Dialog;
