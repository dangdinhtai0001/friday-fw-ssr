import {
  IControllerComponentProps,
  IDefaultTheme,
} from '@/package/preta/types';
import { IDefaultTheme } from '@/package/preta/types';
import { UseInputParameters } from '@mui/base/useInput'

// export interface IInputWrapperProps
//   extends IControllerComponentProps,
//     Omit<IStyledInputContainerProps, 'theme'> {

export interface IInputWrapperProps<TValue> extends
  IControllerComponentProps<TValue>,
  IStyledInputContainerProps,
  Omit<UseInputParameters, 'onChange'> {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  type?:
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'file';
  placeholder?: string;
}

export interface IStyledInputContainerProps {
  theme?: IDefaultTheme;
  width?: string | number;
  disabled?: boolean;
}
