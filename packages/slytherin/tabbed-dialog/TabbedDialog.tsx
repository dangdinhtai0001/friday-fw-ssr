// react imports
import * as React from 'react';
// 3rd imports
import { Dialog, DialogActivator } from '@packages/slytherin';
// local imports
import { getChildrenByType } from '@packages/ravenclaw';
import { TabbedDialogProps } from './TabbedDialog';

function getActivator(children: JSX.Element | JSX.Element[]): JSX.Element | null {
  return getChildrenByType(children, DialogActivator);
}

function TabbedDialog(
  props: TabbedDialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { title, children } = props;
  return (
    <>
      <Dialog>
        <DialogActivator>
          {getActivator(children)!}
        </DialogActivator>
        <DialogExtraHeader>
        </DialogExtraHeader>
      </Dialog>
    </>
  );
}

export default React.forwardRef(TabbedDialog);
