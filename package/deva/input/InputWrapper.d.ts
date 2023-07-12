import { InputOwnProps } from '@mui/base/Input';
import { IControllerComponentProps, IDefaultTheme } from '@/package/preta/types';

// export interface IInputWrapperProps
//   extends InputOwnProps, IControllerComponentProps {
//   onChange: IControllerComponentProps['onChange'];
//   width?: number | string;
//   inputSlotProps?: InputOwnProps['slotProps']['input'];
//   // endAdornment?: InputOwnProps['endAdornment'];
// }

export interface IInputWrapperProps extends InputOwnProps,
  IControllerComponentProps {
  onChange: IControllerComponentProps['onChange'];
  width?: number | string;
  inputSlotProps?: InputOwnProps['slotProps']['input'];
}

export interface IStyledRootSlotProps {
  width?: number | string;
  theme?: IDefaultTheme;
}
