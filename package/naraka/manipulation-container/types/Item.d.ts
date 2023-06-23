import { UseControllerProps } from 'react-hook-form';
import { FieldDef } from './Common.d';
import { IControllerComponentProps } from '@/package/preta/types'

export interface IFieldItemProps extends UseControllerProps {
  fieldDef: FieldDef
}

export interface IFieldItemComponentProps extends IControllerComponentProps {

}
