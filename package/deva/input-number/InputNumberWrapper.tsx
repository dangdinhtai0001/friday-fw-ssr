import { ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IInputNumberWrapperProps } from './types';
import InputWrapper from '@/package/deva/input';
import NumberControl from './NumberControl';
import { StyledAdornmentContainer, StyledAdornmentArrow } from './StyledElements';

function InputNumberWrapper(
  props: IInputNumberWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { min, max, step, precision, } = props;

  const renderAfterAdornment = () => {
    return (
      <StyledAdornmentContainer className='styled-adornment-container'>
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
    ref={ref}
    endAdornment={renderAfterAdornment()}
  />;
}
const numberControlHoverScale = 0.7;

export default forwardRef(InputNumberWrapper);
