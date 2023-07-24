import { forwardRef, ForwardedRef, useState } from 'react';
import { IModalWrapperProps } from './types.d';
import {
  StyledBackdrop,
  StyledModal,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter
} from './StyledElements';

function ModalWrapper(props: IModalWrapperProps, ref: ForwardedRef<unknown>) {

  const {
    height = "50vh",
    width = "50vw"
  } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button type="button" onClick={handleOpen}>Open modal</button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <StyledModalContainer
          className='styled-modal-container'
          id="unstyled-modal-description"
          width={width}
          height={height}
        >
          <StyledModalHeader
            id="unstyled-modal-title"
            className='styled-modal-header'
          >
            This is header
          </StyledModalHeader>
          <StyledModalContent className='styled-modal-content'>
            Aliquid amet deserunt earum!
          </StyledModalContent>
          <StyledModalFooter className='styled-modal-footer'>
          </StyledModalFooter>
        </StyledModalContainer>
      </StyledModal>
    </div>
  );
}

export default forwardRef(ModalWrapper);