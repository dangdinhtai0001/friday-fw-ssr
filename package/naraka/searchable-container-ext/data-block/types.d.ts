import { IDefaultTheme } from '@/package/preta/types';
import { IDataBlockProps } from '@/package/naraka/searchable-container/types';

export interface IDataBlockExtProps extends IDataBlockProps {
}

export interface IStyledGridContainerProps {
  theme?: IDefaultTheme;
  height: number | string;
  width?: number | string;
}

export type TextOperators = 'EQUALS'
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "STARTS_WITH"
  | "ENDS_WITH";

export type CombinationOperators = 'AND' | 'OR';