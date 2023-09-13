import {
  IDataFieldBlockProps,
  DataFieldStatus,
  LabelTextAlign,
} from '@/package/naraka/manipulation-container/types';
import { IDefaultTheme } from '@/package/preta/types';

export interface IDataFieldBlockProps extends IDataFieldBlockProps {}

export interface IStyledLabelProps {
  theme?: IDefaultTheme;
  status?: DataFieldStatus;
  textAlign?: LabelTextAlign;
}

export interface IStyledMessageProps {
  theme?: IDefaultTheme;
  status?: DataFieldStatus;
}

export interface IStyledDataBlockRootProps {
  theme?: IDefaultTheme;
  fieldRaito?: string;
}
