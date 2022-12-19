// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import Backdrop from '@packages/slytherin/dialog/Backdrop';
import { TabbedDialogProps } from './TabbedDialog.d';
import TabbedDialogContainer from './TabbedDialogContainer';
import { useTabbedDialogContext } from './TabbedDialogContext';
import { getActivator } from './TabbedDialogUtils';
import useTabbedDialog from './useTabbedDialog';


function TabbedDialog(
  props: TabbedDialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const {
    children,
    onActiveAction,
    onClose
  } = props;

  const { context } = useTabbedDialogContext();
  const { handleOnClickActivator, handleOnClose } = useTabbedDialog(props);

  return (
    <>
      {React.cloneElement(getActivator(children!)!, { onClick: handleOnClickActivator })}
      <ModalUnstyled
        open={context.opened}
        onClose={handleOnClose}
        closeAfterTransition
        disableScrollLock={true}
        slots={{ backdrop: Backdrop }}
        ref={ref}
      >
        <TabbedDialogContainer
          {...props}
          onActiveAction={onActiveAction}
          onClose={onClose}
        >
          {children}
        </TabbedDialogContainer>
      </ModalUnstyled>
    </>
  );
}

export default React.forwardRef(TabbedDialog);
