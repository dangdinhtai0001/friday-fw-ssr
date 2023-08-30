import {
  IControllerComponentProps,
  IDefaultTheme
} from '@/package/preta/types';
import { GridProps } from '@mui/system/Unstable_Grid';

export interface IRadioGroupOptions extends GridProps {
  id?: string;
  name?: string,
  label?: string;
  value: any;
  disabled?: boolean;
}

export interface IRadioGroupProps<TValue> extends IControllerComponentProps<TValue>, GridProps {
  options: IRadioGroupOptions[];
  name?: string;
}

export interface IRadioGroupRef {
}