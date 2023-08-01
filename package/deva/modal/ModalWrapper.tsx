import { forwardRef, ForwardedRef, createElement, useImperativeHandle } from 'react';
import { ContextHookValue, IModalWrapperProps, IFooterConfig } from './types.d';
import {
  StyledBackdrop,
  StyledModal,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter
} from './StyledElements';
import ButtonWrapper from '@/package/deva/button';
import { useModalContext } from './context/useModalContext'

function ModalWrapper(props: IModalWrapperProps, ref: ForwardedRef<unknown>) {
  const { component, componentParams = {} } = props;
  const { context, contextApi }: ContextHookValue = useModalContext();
  const { open, width, height, footerDefs, title } = context;

  useImperativeHandle(ref, () => ({

  }));

  const handleOpen = () => {
    contextApi.commitOpen(true);
  };
  const handleClose = (event: object, reason: string) => {
    contextApi.commitOpen(false);
  }

  const renderFooter = () => {
    return footerDefs?.map((item: IFooterConfig, index) => {
      let { label, onClick, ...buttonProps } = item;
      return (
        <ButtonWrapper {...buttonProps} key={index} onClick={() => { onClick?.(context, contextApi); }}>
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
            {title}
          </StyledModalHeader>
          <StyledModalContent className='styled-modal-content'>
            {component && createElement(component, componentParams)}
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