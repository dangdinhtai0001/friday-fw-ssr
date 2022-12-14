// react imports
import * as React from 'react';
// 3rd imports
// local imports
import { TabbedDialogProps } from './TabbedDialog.d';
import { useTabbedDialogContext } from './TabbedDialogContext';


function TabbedDialog(
  props: TabbedDialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {

  const {
    children,
    onActiveAction
  } = props;

  const { context, helper } = useTabbedDialogContext();

  const handleOnClickActivator = () => {
    console.debug("Click activator ");
  }

  const handleOnClose = (event: object, reason: string): void => {
    console.debug("Close event with reason: ", reason);
  }

  return <></>;
}

export default React.forwardRef(TabbedDialog);
