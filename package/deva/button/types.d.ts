import { IDefaultTheme } from '@/package/preta/types';
import { UseButtonParameters } from '@mui/base/useButton';

export type ColorType = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

export interface IButtonWrapperProps extends UseButtonParameters, Omit<IStyledButtonProps, 'hasIcon'> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  animationDisabled?: boolean;
  onClick?: () => void | Promise<Void>;
}

export interface IStyledButtonProps {
  theme?: IDefaultTheme;
  width?: string | number;
  colorType?: ColorType;
  color?: string;
  disabled?: boolean;
  border?: boolean;
  textColor?: 'primary' | 'secondary';
  hasIcon?: boolean;
}