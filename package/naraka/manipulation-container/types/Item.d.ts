import { UseControllerProps } from 'react-hook-form';
import { FieldDef } from './Common.d'

export interface IFieldItemProps extends UseControllerProps {
  fieldDef: FieldDef
}
