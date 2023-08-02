import { forwardRef, ForwardedRef, createElement, useImperativeHandle, useRef } from 'react';
import { ContextHookValue, IModalWrapperProps, IFooterConfig, IModalWrapperRef } from './types.d';
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

function ModalWrapper(props: IModalWrapperProps, ref: ForwardedRef<IModalWrapperRef>) {
  const { component, componentParams = {} } = props;
  const { context, contextApi }: ContextHookValue = useModalContext();
  const { open, width, height, footerDefs, title } = context;

  const toggleRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      toggleRef.current?.click();
    },
    getContentRef: () => {
      return contentRef.current;
    }
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
      <button type="button" onClick={handleOpen} ref={toggleRef} style={{ display: 'none' }} />
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
            {component && createElement(component, { ...componentParams, ref: contentRef })}
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

export default forwardRef<IModalWrapperRef, IModalWrapperProps>(ModalWrapper);