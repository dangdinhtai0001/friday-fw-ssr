import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { INumberControlProps } from './types';
import { StyledNumberControlItem, StyledNumberControlContainer } from './StyledElements';
export default function NumberControl(props: INumberControlProps) {
  return (
    <StyledNumberControlContainer className='styled-number-control-container'>
      <motion.div whileTap={{ scale: numberControlHoverScale }} >
        <StyledNumberControlItem>
          <FontAwesomeIcon icon={faChevronUp} style={{ fontSize: '0.5rem' }} />
        </StyledNumberControlItem>
      </motion.div>

      <motion.div whileTap={{ scale: numberControlHoverScale }} >
        <StyledNumberControlItem>
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.5rem' }} />
        </StyledNumberControlItem>
      </motion.div>
    </StyledNumberControlContainer>
  );
}

const numberControlHoverScale = 0.7;