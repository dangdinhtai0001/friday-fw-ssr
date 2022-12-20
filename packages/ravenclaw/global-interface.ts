import { tuple } from './type';

// ==================================================================================================
const _BackgroundThemes = tuple(
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info'
);
export type BackgroundThemes = (typeof _BackgroundThemes)[number];
// ==================================================================================================
const _resizeableDirection = tuple(
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
);
export type ResizeableDirection =
  (typeof _resizeableDirection)[number];

// ==================================================================================================
export type ResizableMetadata = {
  minHeight: number,
  maxHeight?: number,
  minWidth: number,
  maxWidth?: number,
  initialHeight: number,
  initialWidth: number,
};
// ==================================================================================================
export type _childrenType =
  | JSX.Element
  | JSX.Element[]
  | null
  | undefined;
// ==================================================================================================
