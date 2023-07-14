import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import useInput from '@mui/base/useInput';
import { IInputWrapperProps } from './types.d';
import { StyledInputElement, StyledInputContainer, StyledAdornmentContainer } from './StyledElements'

function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLInputElement>) {
  const { endAdornment, startAdornment, type, width, onChange } = props;

  const { getRootProps, getInputProps } = useInput(props);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
    onChange?.(e.target.value);
  }

  return (
    <StyledInputContainer {...getRootProps()} width={width}>
      {startAdornment && (
        <StyledAdornmentContainer className='styled-start-adornment-container'>
          {startAdornment}
        </StyledAdornmentContainer>
      )}

      <StyledInputElement
        {...props}
        autoComplete='off'
        type={type}
        {...getInputProps()}
        onChange={handleOnChange}
        ref={ref}
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
