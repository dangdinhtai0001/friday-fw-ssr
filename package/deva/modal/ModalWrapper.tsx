import { forwardRef, ForwardedRef, createElement, useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IModalWrapperProps, IFooterConfig, IModalWrapperRef } from './types.d';
import {
  StyledBackdrop,
  StyledModal,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter
} from './StyledElements';
import ButtonWrapper from '@/package/deva/button';

function ModalWrapper(props: IModalWrapperProps, ref: ForwardedRef<IModalWrapperRef>) {
  const {
    component,
    componentParams = {},
    open = false,
    footerDefs,
    width = String(props.width ? props.width : '50vw'),
    height = String(props.height ? props.height : '50vh'),
    title,
    id = uuidv4(),
    onClose,
    externalContext
  } = props;

  const [isOpen, setOpen] = useState<boolean>(open);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const handleClose = (event: object, reason: string) => {
    onClose?.(event, reason);
    setOpen(false);
  }

  const renderFooter = () => {
    return footerDefs?.map((item: IFooterConfig, index) => {
      let { label, onClick, ...buttonProps } = item;
      return (
        <ButtonWrapper {...buttonProps} key={index} onClick={() => { onClick?.(contentRef, externalContext); }}>
          {label}
        </ButtonWrapper>
      );
    });
  }

  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={isOpen}
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