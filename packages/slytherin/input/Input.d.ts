import { InputUnstyledProps } from '@mui/base/InputUnstyled';
import React from 'react';

export interface InputProps
  extends InputUnstyledProps,
    React.InputHTMLAttributes<HTMLInputElement> {}
