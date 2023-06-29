import * as React from 'react';
import useOption from '@mui/base/useOption';
import { IOptionWrapperProps } from './types';
import { StyledOption } from './StyledSelectWrapper';

export default function OptionWrapper(props: IOptionWrapperProps) {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });

  return (
    <StyledOption
      {...getRootProps()}
      className={className}
    >
      {children}
    </StyledOption>
  );
}
