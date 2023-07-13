import { IDefaultTheme } from '@/package/preta/types';
import { UseButtonParameters } from '@mui/base/useButton';

export type ColorType = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface IButtonWrapperProps extends UseButtonParameters, IStyledButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void | Promise<Void>;
}

export interface IStyledButtonProps {
  theme?: IDefaultTheme;
  width?: string | number;
  colorType?: ColorType;
  disabled?: boolean;
}