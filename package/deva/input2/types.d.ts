import { IControllerComponentProps, IDefaultTheme } from '@/package/preta/types';
import { IDefaultTheme } from '@/package/preta/types';

export interface IInputWrapperProps extends IControllerComponentProps {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
}

export interface IStyledInputContainerProps {
  theme?: IDefaultTheme;
  width?: string | number;
}