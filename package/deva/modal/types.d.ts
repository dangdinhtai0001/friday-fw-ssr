import { IDefaultTheme } from '@/package/preta/types';

export interface IModalWrapperProps {
  width?: string | number,
  height?: string | number,
}

export interface IBackDropProps {
  open?: boolean;
  className: string
}

export interface IStyledModalContainerProps {
  theme?: IDefaultTheme,
  width?: string | number,
  height?: string | number,
}