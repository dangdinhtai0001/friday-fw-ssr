import { ButtonUnstyledProps } from '@mui/base/ButtonUnstyled';
import { BackgroundThemes } from '@packages/ravenclaw';
import React from 'react';

export type LoadingType = boolean | number;

export interface ButtonProps extends ButtonUnstyledProps {
  // The loading status of button
  loading?: boolean | { delay?: number };
  // background color
  color?: string;
  //Can be set button shape
  rounded?: boolean;
  // true ===> px-0 py-0
  noPadding?: boolean;
  //Option to fit button width to its parent width
  block?: boolean;
  // The icon component of button
  icon?: React.ReactNode;
  // Màu của button theo theme
  theme?: BackgroundThemes;
  // style
  style?: Object;
  // CÓ sử dụng border hay không
  useBorder?: boolean;
  // Set the handler to handle click event
  onClick?: (
    // eslint-disable-next-line no-unused-vars
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void | Promise<void>;
}
