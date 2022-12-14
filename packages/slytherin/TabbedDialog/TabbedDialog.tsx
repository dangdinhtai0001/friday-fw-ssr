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
  const { context, helper } = useTabbedDialogContext();

  return <></>;
}

export default React.forwardRef(TabbedDialog);
