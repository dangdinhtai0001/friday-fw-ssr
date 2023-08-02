import { IDefaultTheme } from '@/package/preta/types';
import { IButtonWrapperProps } from '@/package/deva/button';

export interface IModalWrapperRef {
  open: () => void;
}

export interface IModalProviderProps extends IModalWrapperProps {
  id?: string,
}

export interface IFooterConfig extends IButtonWrapperProps {
  label?: string,
  onClick?: (context?: ContextState, contextApi?: ContextApi, contentRef?: MutableRefObject<any>) => void | Promise<void>,
}

export interface IModalWrapperProps {
  width?: string | number,
  height?: string | number,
  footerDefs?: IFooterConfig[],
  title?: string,
  width?: string,
  height?: string,
  component?: React.ComponentType<any>;
  componentParams?: any;
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

export interface ContextState {
  modalId?: string;
  open: boolean;
  footerDefs?: IFooterConfig[],
  title?: string,
  width?: string,
  height?: string,
}

export interface ContextApi {
  commitOpen: (open: boolean) => void;
}

/**
 * Vùng này không nên sửa
 */
export interface ContextProviderProps {
  initialState: ContextState;
  children: React.ReactElement;
}
export interface ContextProviderValue {
  context: ContextState;
  setContext: React.Dispatch<any>;
}
export interface ContextHookValue {
  context: ContextState;
  contextApi: ContextApi;
}