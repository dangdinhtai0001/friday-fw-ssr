import * as React from 'react';
import { IOptionGroupWrapperProps } from './types';
import { StyledOptionGroupRoot, StyledOptionGroupLabel, StyledOptionGroupList } from './StyledSelectWrapper';


export default function OptionGroupWrapper(props: IOptionGroupWrapperProps) {
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
