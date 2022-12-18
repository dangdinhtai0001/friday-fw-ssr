// react imports
import * as React from 'react';
// 3rd imports
// local imports
import Dialog from './Dialog';
import { DialogProps } from './Dialog.d';
import { DialogContextProvider } from './DialogContext';
import { getDialogInitialContext } from './DialogUtils';

const DialogWrapper = (
  props: DialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element => {
  return (
    <DialogContextProvider
      initialState={getDialogInitialContext(props)}
    >
      <Dialog {...props} ref={ref} />
    </DialogContextProvider>
  );
};

export default React.forwardRef(DialogWrapper);
