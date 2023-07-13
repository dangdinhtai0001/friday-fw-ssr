import { forwardRef } from 'react';
import { IButtonWrapperProps } from './types.d'
import { StyledButtonContainer } from './StyledElements';

function ButtonWrapper(props: IButtonWrapperProps, ref: React.ForwardedRef<any>) {
  return (
    <StyledButtonContainer>

    </StyledButtonContainer>
  );
}

export default forwardRef(ButtonWrapper);
