import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IInputNumberWrapperProps } from './types';
import InputWrapper from '@/package/deva/input2';
import { StyledAdornmentContainer, StyledAdornmentArrow } from './StyledElements';

function InputNumberWrapper(
  props: IInputNumberWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { min, max, step, precision, } = props;

  const renderStartAdornment = () => {
    return (
      <StyledAdornmentContainer>
        <motion.div whileTap={{ scale: numberControlHoverScale }} >
          <StyledAdornmentArrow>
            <FontAwesomeIcon icon={faMinus} />
          </StyledAdornmentArrow>
        </motion.div>
      </StyledAdornmentContainer>
    );
  }

  const renderEndAdornment = () => {
    return (
      <StyledAdornmentContainer>
        <motion.div whileTap={{ scale: numberControlHoverScale }} >
          <StyledAdornmentArrow>
            <FontAwesomeIcon icon={faPlus} />
          </StyledAdornmentArrow>
        </motion.div>
      </StyledAdornmentContainer>
    );
  }

  return <InputWrapper
    {...props}
    endAdornment={renderEndAdornment()}
    startAdornment={renderStartAdornment()}
    ref={ref}
  />;
}
const numberControlHoverScale = 0.7;

export default forwardRef(InputNumberWrapper);
