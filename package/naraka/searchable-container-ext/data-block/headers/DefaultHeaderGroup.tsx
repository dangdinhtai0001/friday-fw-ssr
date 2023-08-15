import { forwardRef, ForwardedRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import { IDefaultHeaderGroupProps, IDefaultHeaderGroupRef } from './types.d';
import { StyledDefaultHeaderGroupContainer } from './StyledElements';
import ButtonWrapper from '@/package/deva/button/ButtonWrapper';
function DefaultHeaderGroup(props: IDefaultHeaderGroupProps, ref: ForwardedRef<IDefaultHeaderGroupRef>) {
  const { displayName, setExpanded, columnGroup, } = props;

  const [_, setExpandState] = useState('collapsed');

  const childrenLength = columnGroup.getChildren()?.length || 0;
  if (childrenLength <= 1) {
    return null;
  }
  const expandOrCollapse = () => {
    let currentState = columnGroup.getProvidedColumnGroup().isExpanded();
    setExpanded(!currentState);

    setExpandState(currentState ? 'expanded' : 'collapsed');
  }

  const isExpanded = columnGroup.getProvidedColumnGroup().isExpanded();

  return (
    <StyledDefaultHeaderGroupContainer className='styled-default-header-group-container'>
      {displayName}
      <ButtonWrapper
        icon={(
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </motion.div>
        )}
        onClick={expandOrCollapse}
      />
    </StyledDefaultHeaderGroupContainer>
  );
};


export default forwardRef(DefaultHeaderGroup);
