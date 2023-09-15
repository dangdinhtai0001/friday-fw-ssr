import { UseControllerProps } from 'react-hook-form';
import { IControllerComponentProps } from '@/package/preta/types';

export interface IFieldItemComponentProps
  extends IControllerComponentProps {}

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
  labelAlign?: LabelTextAlign;
}

export type DataFieldStatus = 'error' | 'warning';
export type LabelTextAlign = 'left' | 'center' | 'right';
export interface IDataFieldBlockProps {
  fieldDef: FieldDef;
  name: string;
}

export interface IFieldItemProps
  extends UseControllerProps,
    IControllerComponentProps {
  fieldDef: FieldDef;
}
