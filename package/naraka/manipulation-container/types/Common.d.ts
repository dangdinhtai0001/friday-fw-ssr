import { UseControllerProps } from 'react-hook-form';

export interface FieldDef<T> {
  name: string;
  label?: string;
  required?: boolean;
  readOnly?: boolean;
  isHidden?: boolean;
  disabled?: boolean;
  initialValue: unknown;
  componentParams?: T;
  component: React.ComponentType<T>;
  // 
  fieldRaito?: string;
  labelAlign?: LabelTextAlign
}

export type DataFieldStatus = 'error' | 'warning';
export type LabelTextAlign = 'left' | 'center' | 'right';
export interface IDataFieldBlockProps {
  fieldItemProps: IFieldItemProps;
}

export interface IFieldItemProps extends UseControllerProps {
  fieldDef: FieldDef
}