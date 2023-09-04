import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import useInput from '@mui/base/useInput';
import { IInputWrapperProps } from './types.d';
import { StyledInputElement, StyledInputContainer, StyledAdornmentContainer } from './StyledElements'

/**
 * A wrapper component for an input field with optional start and end adornments.
 * 
 * @param props - The properties of the input field.
 * @param ref - A reference to the input element.
 * @returns The rendered input field with optional start and end adornments.
 */
function InputWrapper(props: IInputWrapperProps, ref: ForwardedRef<HTMLInputElement>) {
  const { endAdornment, startAdornment, type='text', width=-1, onChange } = props;

  const { getRootProps, getInputProps } = useInput(props);

  /**
   * Handles changes in the input field and calls the onChange function if it exists.
   * Logs the input value to the console for debugging purposes.
   * 
   * @param e - The change event object.
   */
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);

    onChange?.(e.target.value);
  }

  return (
    <StyledInputContainer {...getRootProps()} width={width} className='styled-input-container'>
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
        className='styled-input-element'
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
