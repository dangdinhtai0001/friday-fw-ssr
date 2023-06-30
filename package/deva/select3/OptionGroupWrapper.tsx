import * as React from 'react';
import { IOptionGroupWrapperProps } from './types';
import {
  StyledOptionGroupLabel,
  StyledOptionGroupRoot,
  StyledOptionGroupList
} from './StyledElement';

export default function OptionGroupWrapper(
  props: IOptionGroupWrapperProps
) {
  const { children, label } = props;

  return (
    <StyledOptionGroupRoot>
      <StyledOptionGroupLabel>{label}</StyledOptionGroupLabel>
      <StyledOptionGroupList>
        {children}
      </StyledOptionGroupList>
    </StyledOptionGroupRoot>
  );
}
