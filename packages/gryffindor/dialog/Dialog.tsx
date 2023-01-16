// react imports
import * as React from 'react';
// 3rd imports
// local imports
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Backdrop from './Backdrop';
import { DialogProps } from './Dialog.d';
import DialogContainer from './DialogContainer';
import { useDialogContext } from './DialogContext';
import useDialog from './useDialog';


function Dialog(
  props: DialogProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const { context } = useDialogContext<any>();

  const {
    generateActivator,
    handleOnClickActivator,
    handleOnClose,
    containerAnimationControls
  } = useDialog(props);

  return (
    <>
      {React.cloneElement(generateActivator()!, { onClick: handleOnClickActivator })}
      <ModalUnstyled
        open={context.opened}
        onClose={handleOnClose}
        closeAfterTransition={false}
        disableScrollLock={true}
        hideBackdrop={false}
        slots={{ backdrop: Backdrop }}
        ref={ref}
      >
        <DialogContainer
          {...props}
          containerAnimationControls={containerAnimationControls}
          handleOnClose={handleOnClose}
          extraHeader={<div>Extra header</div>}
          footer={<div> footer</div>}
        >
          <div>content</div>
        </DialogContainer>
      </ModalUnstyled>
    </>
  );
}

export default React.forwardRef(Dialog);
