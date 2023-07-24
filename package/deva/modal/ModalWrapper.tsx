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
import ButtonWrapper from '@/package/deva/button';

function ModalWrapper(props: IModalWrapperProps, ref: ForwardedRef<unknown>) {

  const {
    height = "50vh",
    width = "50vw",
    footerDefs,
  } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderFooter = () => {
    return footerDefs?.map((item, index) => {
      let { label, ...buttonProps } = item;
      return (
        <ButtonWrapper {...buttonProps} key={index}>
          {label}
        </ButtonWrapper>
      );
    });
  }

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
          {footerDefs && (
            <StyledModalFooter className='styled-modal-footer'>
              {renderFooter()}
            </StyledModalFooter>
          )}

        </StyledModalContainer>
      </StyledModal>
    </div>
  );
}

export default forwardRef(ModalWrapper);