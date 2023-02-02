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

  const { generateActivator, handleOnClickActivator } = useDialog(props);

  return (
    <>
      {React.cloneElement(generateActivator()!, { onClick: handleOnClickActivator })}
      <ModalUnstyled
        open={context.opened}
        closeAfterTransition={false}
        disableScrollLock={true}
        hideBackdrop={false}
        slots={{ backdrop: Backdrop }}
        ref={ref}
      >
        <DialogContainer
          {...props}
          // Phải thêm minHeight, maxHeight để tránh TH không khai báo tham số  này thì hook useResize sẽ bị sai
          minHeight={context.minHeight}
          maxHeight={context.maxHeight}
          minWidth={context.minWidth}
          maxWidth={context.maxWidth}
        >
        </DialogContainer>
      </ModalUnstyled>
    </>
  );
}

export default React.forwardRef(Dialog);
