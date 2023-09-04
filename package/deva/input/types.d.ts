import { IControllerComponentProps, IDefaultTheme } from '@/package/preta/types';
import { IDefaultTheme } from '@/package/preta/types';

export interface IInputWrapperProps extends IControllerComponentProps, Omit<IStyledInputContainerProps, 'theme'> {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  type?: 'text' | 'password' | 'number' | 'email' | 'date' | 'checkbox' | 'radio' | 'file';
  placeholder?: string;
}

export interface IStyledInputContainerProps {
  theme?: IDefaultTheme;
  width?: string | number;
}