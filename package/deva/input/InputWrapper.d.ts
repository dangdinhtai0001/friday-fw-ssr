import { InputProps } from '@mui/base/Input';
import { IControllerComponentProps } from '@/package/preta/types';

export interface IInputWrapperProps 
extends InputProps, IControllerComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
  onChange: IControllerComponentProps['onChange'];
  width?: number| string;
}