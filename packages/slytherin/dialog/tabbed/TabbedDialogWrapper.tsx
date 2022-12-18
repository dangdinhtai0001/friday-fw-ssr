// react imports
import * as React from 'react';
// 3rd imports
// local imports
import TabbedDialog from './TabbedDialog';
import { DialogProps } from './TabbedDialog.d';
import { TabbedDialogContextProvider } from './TabbedDialogContext';

function getDialogContextInitial(props: DialogProps) {
  const {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    initialHeight,
    initialWidth,
    title,
    actions,
    defaultActiveTabId
  } = props;


  return {
    opened: false,
    title: title,
    actions: actions,
    defaultActiveTabId: defaultActiveTabId,
    activeTabId: defaultActiveTabId,
    minHeight: minHeight ? minHeight : 200,
    maxHeight: maxHeight ? maxHeight : 800,
    minWidth: minWidth ? minWidth : 600,
    maxWidth: maxWidth ? maxWidth : 1000,
    initialHeight: initialHeight ? initialHeight : 300,
    initialWidth: initialWidth ? initialWidth : 600
  };
}

const TabbedDialogWrapper = (
  props: DialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element => {
  return (
    <TabbedDialogContextProvider
      initialState={getDialogContextInitial(props)}
    >
      <TabbedDialog {...props} ref={ref} />
    </TabbedDialogContextProvider>
  );
};

export default React.forwardRef(TabbedDialogWrapper);
