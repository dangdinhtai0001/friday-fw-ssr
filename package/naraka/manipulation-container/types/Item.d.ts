import { UseControllerProps } from 'react-hook-form';
import { FieldDef } from './Common.d'

export interface IFieldItemProps extends UseControllerProps {
  fieldDef: FieldDef
}

export interface IFieldItemComponentProps {
  disabled: boolean;
  readOnly: boolean;
  hidden: boolean;
  onChange: (value: any) => void | Promise<void>;
  ref: any;
}
