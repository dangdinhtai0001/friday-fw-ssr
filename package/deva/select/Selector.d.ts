import { SelectProps } from '@mui/base/Select';
import { IControllerComponentProps } from '@/package/preta/types'

export interface IOption {

}

export interface ISelectorProps extends SelectProps, IControllerComponentProps {
  options: IOption[];
}