import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IInputNumberWrapperProps } from './types';
import InputWrapper from '@/package/deva/input';
import ButtonWrapper from '@/package/deva/button';
import { StyledAdornmentContainer } from './StyledElements';

function InputNumberWrapper(
  props: IInputNumberWrapperProps<Number>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { min, max, step = 1, precision, value, onChange } = props;

  const handleOnIncrease = () => {
    if (max === undefined || Number(value) + Number(step) <= max) {
      onChange?.(Number(value) + Number(step));
    }
  };

  const handleOnDecrease = () => {
    if (min === undefined || Number(value) - Number(step) >= min) {
      onChange?.(Number(value) - Number(step));
    }
  };

  const renderStartAdornment = () => {
    return (
      <StyledAdornmentContainer>
        <ButtonWrapper
          icon={<FontAwesomeIcon icon={faMinus} />}
          color="transparent"
          textColor="primary"
          onClick={handleOnDecrease}
          disabled={
            min === undefined || Number(value) - Number(step) < min
          }
        ></ButtonWrapper>
      </StyledAdornmentContainer>
    );
  };

  const renderEndAdornment = () => {
    return (
      <StyledAdornmentContainer>
        <ButtonWrapper
          icon={<FontAwesomeIcon icon={faPlus} />}
          color="transparent"
          textColor="primary"
          onClick={handleOnIncrease}
          disabled={
            max !== undefined && Number(value) + Number(step) > max
          }
        ></ButtonWrapper>
      </StyledAdornmentContainer>
    );
  };

  const handleOnChange = (value: number) => {
    // console.log(value, max && max >= value, min && min <= value);
    if (max && max >= value && min && min <= value) {
      onChange?.(value);
    }
  };

  return (
    <InputWrapper
      {...props}
      type="number"
      onChange={handleOnChange}
      endAdornment={renderEndAdornment()}
      startAdornment={renderStartAdornment()}
      ref={ref}
    />
  );
}
const numberControlHoverScale = 0.7;

export default forwardRef(InputNumberWrapper);
