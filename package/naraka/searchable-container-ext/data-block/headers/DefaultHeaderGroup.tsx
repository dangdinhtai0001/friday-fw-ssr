import { forwardRef, ForwardedRef } from 'react';
import { IDefaultHeaderGroupProps, IDefaultHeaderGroupRef } from './types.d';
import { StyledDefaultHeaderGroupContainer } from './StyledElements';

function DefaultHeaderGroup(props: IDefaultHeaderGroupProps, ref: ForwardedRef<IDefaultHeaderGroupRef>) {
  const { displayName } = props;

  return (
    <StyledDefaultHeaderGroupContainer className='styled-default-header-group-container'>
      {displayName}
    </StyledDefaultHeaderGroupContainer>
  );
};


export default forwardRef(DefaultHeaderGroup);
