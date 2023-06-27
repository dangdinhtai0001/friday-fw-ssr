import { InputProps } from '@mui/base/Input';
import { IControllerComponentProps } from '@/package/preta/types';

export interface IInputWrapperProps extends InputProps, IControllerComponentProps {
  onChange: IControllerComponentProps['onChange'];
}