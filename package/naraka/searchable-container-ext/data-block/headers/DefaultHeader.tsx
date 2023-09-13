import {
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { IDefaultHeaderProps, IDefaultHeaderRef } from './types';
import { StyledDefaultHeaderContainer } from './StyledElements';
import ButtonWrapper from '@/package/deva/button';

function DefaultHeader(
  props: IDefaultHeaderProps,
  ref: ForwardedRef<IDefaultHeaderRef>
) {
  const { displayName, enableMenu } = props;

  useImperativeHandle(ref, () => ({
    refresh(props: IDefaultHeaderProps): boolean {
      return true;
    },
  }));

  return (
    <StyledDefaultHeaderContainer className="styled-default-header-container">
      <span>{displayName}</span>
      {enableMenu && (
        <ButtonWrapper icon={<FontAwesomeIcon icon={faBars} />} />
      )}
    </StyledDefaultHeaderContainer>
  );
}

export default forwardRef(DefaultHeader);
