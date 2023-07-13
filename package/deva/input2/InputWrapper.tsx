import { ForwardedRef, forwardRef } from 'react';
import useInput from '@mui/base/useInput';
import { IInputWrapperProps } from './types.d';
import { StyledInputElement, StyledInputContainer, StyledAdornmentContainer } from './StyledElements'

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLDivElement>) {
  const { endAdornment, startAdornment } = props;

  const { getRootProps, getInputProps } = useInput(props);

  return (
    <StyledInputContainer {...getRootProps()}>
      {startAdornment && (
        <StyledAdornmentContainer className='styled-start-adornment-container'>
          {startAdornment}
        </StyledAdornmentContainer>
      )}

      <StyledInputElement
        {...props}
        autoComplete='off'
        {...getInputProps()}
      />

      {endAdornment && (
        <StyledAdornmentContainer className='styled-end-adornment-container'>
          {endAdornment}
        </StyledAdornmentContainer>
      )}

    </StyledInputContainer>
  );
}

export default forwardRef(InputWrapper);
