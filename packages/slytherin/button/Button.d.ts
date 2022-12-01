import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import React from 'react';

export type Loading = boolean | number;

export interface ButtonProps extends ButtonUnstyledProps {
  /**
   * The loading status of button
   */
  loading?: boolean | { delay?: number };
  /**
   * Can be set button shape
   */
  rounded?: boolean;
  /**
   * Option to fit button width to its parent width
   */
  block?: boolean;
  /**
   * The icon component of button
   */
  icon?: React.ReactNode;
}
