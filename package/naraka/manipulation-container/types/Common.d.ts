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
  labelAlign?: DataFieldLabel_TextAlign
}

export type DataFieldLabel_Status = 'error' | 'warning';
export type DataFieldLabel_TextAlign = 'left' | 'center' | 'right';
export interface IDataFieldBlockProps {
  fieldItemProps: IFieldItemProps;
}

export interface IFieldItemProps extends UseControllerProps {
  fieldDef: FieldDef
}