export type DividerType =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'initial'
  | 'inherit';

export interface IDividerProps {
  height?: number | string;
  text?: string;
  type?: DividerType;
  color?: string;
}
