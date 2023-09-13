import { IDefaultTheme } from '@/package/preta/types';
import { IButtonWrapperProps } from '@/package/deva/button';

export interface IModalWrapperRef {
  // open: () => void;
}

export interface IFooterConfig extends IButtonWrapperProps {
  label?: string;
  onClick?: (
    contentRef?: MutableRefObject<any>,
    context?: any
  ) => void | Promise<void>;
}

export interface IModalWrapperProps {
  id?: string;
  width?: string | number;
  height?: string | number;
  footerDefs?: IFooterConfig[];
  title?: string;
  width?: string;
  height?: string;
  component?: React.ComponentType<any> | string;
  componentParams?: any;
  open?: boolean;
  externalContext?: any;
  onClose?: (event: object, reason: string) => void;
}

export interface IBackDropProps {
  open?: boolean;
  className: string;
}

export interface IStyledModalContainerProps {
  theme?: IDefaultTheme;
  width?: string | number;
  height?: string | number;
}
