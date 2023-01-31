// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Dialog from './Dialog';
import { DialogProps } from './Dialog.d';
import { DialogContextProvider } from './DialogContext';

function getInitialContext(props: DialogProps) {
  const {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    initialHeight,
    initialWidth,
    title,
    actions,
  } = props;

  return {
    opened: false,
    title: title,
    actions: actions,
    minHeight: minHeight ? minHeight : 200,
    maxHeight: maxHeight ? maxHeight : 800,
    minWidth: minWidth ? minWidth : 600,
    maxWidth: maxWidth ? maxWidth : 1000,
    initialHeight: initialHeight ? initialHeight : 300,
    initialWidth: initialWidth ? initialWidth : 600,
  };
}

function DialogWrapper(
  props: DialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  return (
    <DialogContextProvider initialState={getInitialContext(props)}>
      <Dialog {...props} ref={ref} />
    </DialogContextProvider>
  );
}

export default React.forwardRef(DialogWrapper);
