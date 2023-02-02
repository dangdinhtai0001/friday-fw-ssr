// react imports
import * as React from 'react';
// 3rd imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
// local imports
import Backdrop from '@packages/gryffindor/dialog/Backdrop';
import { TabbedDialogProps } from './TabbedDialog.d';
import TabbedDialogContainer from './TabbedDialogContainer';
import { useTabbedDialogContext } from './TabbedDialogContext';
import useTabbedDialog from './useTabbedDialog';


function TabbedDialog(
  props: TabbedDialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context } = useTabbedDialogContext();
  const { activator, handleOnClickActivator } = useTabbedDialog(props);

  return (
    <>
      {React.cloneElement(activator!, { onClick: handleOnClickActivator })}
      <ModalUnstyled
        open={context.opened}
        closeAfterTransition={false}
        disableScrollLock={true}
        hideBackdrop={false}
        slots={{ backdrop: Backdrop }}
        keepMounted={false}
        ref={ref}
      >
        <TabbedDialogContainer
          {...props}
          // Phải thêm minHeight, maxHeight để tránh TH không khai báo tham số  này thì hook useResize sẽ bị sai
          minHeight={context.minHeight}
          maxHeight={context.maxHeight}
          minWidth={context.minWidth}
          maxWidth={context.maxWidth}
        >
        </TabbedDialogContainer>
      </ModalUnstyled>
    </>
  );
}

export default React.forwardRef(TabbedDialog);
