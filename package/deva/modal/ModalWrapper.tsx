import * as React from 'react';
import { IModalWrapperProps } from './types.d';
import {
  StyledBackdrop,
  StyledModal,
  StyledModalContainer,
  StyledModalHeader
} from './StyledElements';

export default function ModalWrapper(props: IModalWrapperProps) {
  const { height = "50vh", width = "50vw" } = props;

  const [open, setOpen] = React.useState(false);
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
          width={width}
          height={height}
        >
          <StyledModalHeader
            id="unstyled-modal-title"
            className='styled-modal-header'
          >
            This is header
          </StyledModalHeader>
          <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
        </StyledModalContainer>
      </StyledModal>
    </div>
  );
}
