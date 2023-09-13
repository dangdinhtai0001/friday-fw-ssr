import { IDefaultTheme } from '@/package/preta/types';
import { IDataBlockProps } from '@/package/naraka/searchable-container/types';

export interface IDataBlockExtProps extends IDataBlockProps {}

export interface IStyledGridContainerProps {
  theme?: IDefaultTheme;
  height: number | string;
  width?: number | string;
}

export type TextOperator =
  | 'EQUALS'
  | 'NOT_EQUALS'
  | 'CONTAINS'
  | 'NOT_CONTAINS'
  | 'STARTS_WITH'
  | 'NOT_STARTS_WITH'
  | 'ENDS_WITH'
  | 'NOT_ENDS_WITH';

export type CombinationOperator = 'AND' | 'OR';
