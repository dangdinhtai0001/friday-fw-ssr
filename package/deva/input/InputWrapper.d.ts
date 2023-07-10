import { InputProps, InputOwnProps } from '@mui/base/Input';
import { IControllerComponentProps } from '@/package/preta/types';

export interface IInputWrapperProps
  extends InputProps, InputOwnProps, IControllerComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
  onChange: IControllerComponentProps['onChange'];
  width?: number | string;
  inputSlotProps?: InputOwnProps['slotProps']['input']
}