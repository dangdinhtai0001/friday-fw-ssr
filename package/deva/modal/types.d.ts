import { IDefaultTheme } from '@/package/preta/types';
import { IButtonWrapperProps } from '@/package/deva/button';

export interface IModalProviderProps extends IModalWrapperProps {
  id?: string,
}

export interface footerConfig extends IButtonWrapperProps {
  label?: string,
  onClick?: () => void,
}

export interface IModalWrapperProps {
  width?: string | number,
  height?: string | number,
  footerDefs?: footerConfig[],
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
}

export interface ContextApi {
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