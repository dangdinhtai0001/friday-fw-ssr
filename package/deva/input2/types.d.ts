import { IControllerComponentProps, IDefaultTheme } from '@/package/preta/types';
import { IDefaultTheme } from '@/package/preta/types';

export interface IInputWrapperProps extends IControllerComponentProps {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  type: 'text' | 'password' | 'number' | 'email' | 'date' | 'checkbox' | 'radio' | 'file';

}

export interface IStyledInputContainerProps {
  theme?: IDefaultTheme;
  width?: string | number;
}